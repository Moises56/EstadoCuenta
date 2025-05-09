import { Injectable, UnauthorizedException, NotFoundException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { User, JwtPayload, UserResponse } from './dto/user.model';
import { CreateUserDto, UserRole } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    // Buscar usuario por nombre de usuario
    const user = await this.findUserByUsername(username);
    
    if (!user) {
      return null;
    }

    // Verificar password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return null;
    }

    // Asegurarnos de que el usuario esté correctamente marcado como activo/inactivo
    console.log('Usuario encontrado:', {
      username: user.username,
      isActive: user.isActive,
      rawIsActive: user.isActive === true,
    });
    
    return user;
  }

  async login(loginDto: LoginDto): Promise<{ accessToken: string }> {
    const user = await this.validateUser(loginDto.username, loginDto.password);
    
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // Añadir logs para depuración
    console.log('Login attempt:', {
      username: user.username,
      isActive: user.isActive,
      rawIsActive: user.isActive === true,
    });

    if (user.isActive !== true) {
      throw new UnauthorizedException('Usuario inactivo. Contacte al administrador.');
    }

    const payload: JwtPayload = {
      sub: user.id,
      username: user.username,
      role: user.role,
    };

    const accessToken = this.jwtService.sign(payload);
    
    return {
      accessToken,
    };
  }

  async findUserByUsername(username: string): Promise<User | null> {
    const users = await this.prisma.$queryRaw`
      SELECT * FROM USERS WHERE USERNAME = ${username}
    `;

    if (!users || (users as any[]).length === 0) {
      return null;
    }

    const user = (users as any[])[0];
    
    // Añadir logs para depurar el valor de IS_ACTIVE
    console.log('Raw IS_ACTIVE value:', {
      raw: user.IS_ACTIVE,
      type: typeof user.IS_ACTIVE,
      toString: user.IS_ACTIVE.toString(),
      toNumber: Number(user.IS_ACTIVE),
      valueIs1: user.IS_ACTIVE === 1,
      valueEq1: user.IS_ACTIVE == 1,
      valueIsTrue: user.IS_ACTIVE === true
    });
    
    // Convertir IS_ACTIVE a booleano de manera más explícita
    const isActive = user.IS_ACTIVE === 1 || user.IS_ACTIVE === true || user.IS_ACTIVE === 'true' || user.IS_ACTIVE === '1';
    
    return {
      id: user.UserId,
      username: user.USERNAME,
      password: user.PASSWORD,
      email: user.EMAIL,
      fullName: user.FULL_NAME,
      role: user.ROLE,
      isActive: isActive,
      createdAt: user.CREATED_AT,
      updatedAt: user.UPDATED_AT,
    };
  }

  async findUserById(id: string): Promise<User | null> {
    // Agregar logs para depuración
    console.log(`Buscando usuario con ID: ${id}`);
    
    try {
      const users = await this.prisma.$queryRaw`
        SELECT * FROM USERS WHERE UserId = ${id}
      `;

      console.log('Resultado de la consulta:', users);

      if (!users || (users as any[]).length === 0) {
        console.log(`No se encontró ningún usuario con ID: ${id}`);
        return null;
      }

      const user = (users as any[])[0];
      
      // Mostrar los detalles del usuario encontrado
      console.log('Usuario encontrado:', {
        id: user.UserId,
        username: user.USERNAME,
        isActive: user.IS_ACTIVE,
        role: user.ROLE
      });
      
      // Convertir IS_ACTIVE a booleano de manera más explícita
      const isActive = user.IS_ACTIVE === 1 || user.IS_ACTIVE === true || 
                      user.IS_ACTIVE === '1' || user.IS_ACTIVE === 'true' || 
                      String(user.IS_ACTIVE).toLowerCase() === 'true';
      
      console.log('Valor de IS_ACTIVE después de conversión:', isActive);
      
      return {
        id: user.UserId,
        username: user.USERNAME,
        password: user.PASSWORD,
        email: user.EMAIL,
        fullName: user.FULL_NAME,
        role: user.ROLE,
        isActive: isActive,
        createdAt: user.CREATED_AT,
        updatedAt: user.UPDATED_AT,
      };
    } catch (error) {
      console.error('Error al buscar usuario por ID:', error);
      return null;
    }
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    // Verificar si el usuario ya existe
    const existingUser = await this.findUserByUsername(createUserDto.username);
    if (existingUser) {
      throw new ConflictException(`El usuario ${createUserDto.username} ya existe`);
    }

    // Verificar si el email ya existe
    const existingEmail = await this.findUserByEmail(createUserDto.email);
    if (existingEmail) {
      throw new ConflictException(`El email ${createUserDto.email} ya está en uso`);
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    
    // Generar ID único
    const userId = this.generateUuid();
    
    // Crear el usuario (siempre activo)
    await this.prisma.$executeRaw`
      INSERT INTO USERS (
        UserId, 
        USERNAME, 
        PASSWORD, 
        EMAIL, 
        FULL_NAME, 
        ROLE, 
        IS_ACTIVE, 
        CREATED_AT, 
        UPDATED_AT
      ) VALUES (
        ${userId},
        ${createUserDto.username},
        ${hashedPassword},
        ${createUserDto.email},
        ${createUserDto.fullName},
        ${createUserDto.role},
        ${1}, /* Asegurar que siempre se cree como activo */
        GETDATE(),
        GETDATE()
      )
    `;
    
    // Obtener el usuario creado
    return this.findUserById(userId);
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const users = await this.prisma.$queryRaw`
      SELECT * FROM USERS WHERE EMAIL = ${email}
    `;

    if (!users || (users as any[]).length === 0) {
      return null;
    }

    const user = (users as any[])[0];
    
    return {
      id: user.UserId,
      username: user.USERNAME,
      password: user.PASSWORD,
      email: user.EMAIL,
      fullName: user.FULL_NAME,
      role: user.ROLE,
      isActive: user.IS_ACTIVE === 1,
      createdAt: user.CREATED_AT,
      updatedAt: user.UPDATED_AT,
    };
  }

  async hasAdminUsers(): Promise<boolean> {
    const admins = await this.prisma.$queryRaw`
      SELECT COUNT(*) as count FROM USERS WHERE ROLE = 'ADMIN'
    `;
    
    return (admins as any[])[0].count > 0;
  }

  /**
   * Genera un UUID para ser usado como ID primario
   */
  private generateUuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  getUserResponse(user: User): UserResponse {
    const { password, isActive, createdAt, updatedAt, ...userResponse } = user;
    return userResponse;
  }

  async setUserActive(userId: string, isActive: boolean): Promise<void> {
    // Verificar si el usuario existe
    const user = await this.findUserById(userId);
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${userId} no encontrado`);
    }
    
    // Actualizar el estado activo del usuario
    await this.prisma.$executeRaw`
      UPDATE USERS 
      SET IS_ACTIVE = ${isActive ? 1 : 0}, UPDATED_AT = GETDATE()
      WHERE UserId = ${userId}
    `;
  }
}