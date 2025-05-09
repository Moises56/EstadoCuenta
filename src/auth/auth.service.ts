import { Injectable, UnauthorizedException, NotFoundException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { User, JwtPayload, UserResponse } from './dto/user.model';
import { CreateUserDto, UserRole } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { PaginatedResult } from '../common/dto/pagination.dto';
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

  async getAllUsers(page = 1, limit = 10): Promise<PaginatedResult<UserResponse>> {
    try {
      // Calcular el offset para la paginación
      const offset = (page - 1) * limit;
      
      // Obtener el total de usuarios
      const countResult = await this.prisma.$queryRaw`SELECT COUNT(*) as total FROM USERS`;
      const total = Number(countResult[0].total);
      
      // Obtener los usuarios paginados
      const users = await this.prisma.$queryRaw`
        SELECT * FROM USERS 
        ORDER BY FULL_NAME
        OFFSET ${offset} ROWS 
        FETCH NEXT ${limit} ROWS ONLY
      `;
      
      // Formatear la respuesta
      const formattedUsers = (users as any[]).map(user => {
        return this.getUserResponse({
          id: user.UserId,
          username: user.USERNAME,
          password: user.PASSWORD,
          email: user.EMAIL,
          fullName: user.FULL_NAME,
          role: user.ROLE,
          isActive: user.IS_ACTIVE === 1 || user.IS_ACTIVE === true,
          createdAt: user.CREATED_AT,
          updatedAt: user.UPDATED_AT,
        });
      });
      
      // Calcular el total de páginas
      const totalPages = Math.ceil(total / limit);
      
      return {
        data: formattedUsers,
        meta: {
          total,
          page,
          limit,
          totalPages
        }
      };
    } catch (error) {
      console.error('Error al obtener usuarios paginados:', error);
      throw new Error('Error al obtener la lista de usuarios');
    }
  }

  async updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
    // Verificar si el usuario existe
    const existingUser = await this.findUserById(userId);
    if (!existingUser) {
      throw new NotFoundException(`Usuario con ID ${userId} no encontrado`);
    }

    // Si se intenta cambiar el username, verificar que no exista
    if (updateUserDto.username && updateUserDto.username !== existingUser.username) {
      const userWithUsername = await this.findUserByUsername(updateUserDto.username);
      if (userWithUsername) {
        throw new ConflictException(`El nombre de usuario ${updateUserDto.username} ya está en uso`);
      }
    }

    // Si se intenta cambiar el email, verificar que no exista
    if (updateUserDto.email && updateUserDto.email !== existingUser.email) {
      const userWithEmail = await this.findUserByEmail(updateUserDto.email);
      if (userWithEmail) {
        throw new ConflictException(`El email ${updateUserDto.email} ya está en uso`);
      }
    }

    // Construir la consulta SQL de actualización
    let query = 'UPDATE USERS SET ';
    const params = [];
    const updateParts = [];

    if (updateUserDto.username) {
      updateParts.push('USERNAME = ?');
      params.push(updateUserDto.username);
    }

    if (updateUserDto.email) {
      updateParts.push('EMAIL = ?');
      params.push(updateUserDto.email);
    }

    if (updateUserDto.fullName) {
      updateParts.push('FULL_NAME = ?');
      params.push(updateUserDto.fullName);
    }

    if (updateUserDto.role) {
      updateParts.push('ROLE = ?');
      params.push(updateUserDto.role);
    }

    if (updateUserDto.isActive !== undefined) {
      updateParts.push('IS_ACTIVE = ?');
      params.push(updateUserDto.isActive ? 1 : 0);
    }

    // Siempre actualizar la fecha de modificación
    updateParts.push('UPDATED_AT = GETDATE()');

    if (updateParts.length === 0) {
      throw new Error('No se proporcionaron campos para actualizar');
    }

    query += updateParts.join(', ') + ' WHERE UserId = ?';
    params.push(userId);

    // Ejecutar la actualización
    await this.prisma.$executeRawUnsafe(query, ...params);

    // Obtener el usuario actualizado
    return this.findUserById(userId);
  }

  async changeUserPassword(userId: string, changePasswordDto: ChangePasswordDto): Promise<boolean> {
    // Verificar si el usuario existe
    const user = await this.findUserById(userId);
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${userId} no encontrado`);
    }

    // Verificar que la contraseña actual sea correcta
    const isPasswordValid = await bcrypt.compare(changePasswordDto.currentPassword, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('La contraseña actual es incorrecta');
    }

    // Verificar que la nueva contraseña y la confirmación coincidan
    if (changePasswordDto.newPassword !== changePasswordDto.confirmPassword) {
      throw new UnauthorizedException('La nueva contraseña y la confirmación no coinciden');
    }

    // Encriptar la nueva contraseña
    const hashedPassword = await bcrypt.hash(changePasswordDto.newPassword, 10);

    // Actualizar la contraseña
    await this.prisma.$executeRaw`
      UPDATE USERS
      SET PASSWORD = ${hashedPassword}, UPDATED_AT = GETDATE()
      WHERE UserId = ${userId}
    `;

    return true;
  }

  /**
   * Permite a un administrador cambiar la contraseña de un usuario sin necesidad de verificar la contraseña actual
   */
  async adminResetPassword(userId: string, newPassword: string): Promise<void> {
    // Verificar que el usuario existe
    const user = await this.findUserById(userId);

    if (!user) {
      throw new NotFoundException(`Usuario con ID ${userId} no encontrado`);
    }

    // Generar hash de la nueva contraseña
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Actualizar la contraseña en la base de datos
    await this.prisma.$executeRaw`
      UPDATE USERS
      SET PASSWORD = ${hashedPassword}, UPDATED_AT = GETDATE()
      WHERE UserId = ${userId}
    `;
  }

  async deleteUser(userId: string): Promise<boolean> {
    // Verificar si el usuario existe
    const user = await this.findUserById(userId);
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${userId} no encontrado`);
    }

    // Eliminar el usuario (eliminación lógica cambiando a inactivo)
    await this.prisma.$executeRaw`
      UPDATE USERS
      SET IS_ACTIVE = 0, UPDATED_AT = GETDATE()
      WHERE UserId = ${userId}
    `;

    return true;
  }

  async getLogsPaginated(
    page = 1, 
    limit = 10, 
    userId?: string, 
    action?: string, 
    startDate?: string, 
    endDate?: string
  ): Promise<PaginatedResult<any>> {
    try {
      // Construir la base de la consulta para el conteo total
      let countQuery = `
        SELECT COUNT(*) as total 
        FROM LOGS L
        WHERE 1=1
      `;
      
      // Construir la base de la consulta para obtener los logs
      let dataQuery = `
        SELECT L.LogId, L.USER_ID, U.USERNAME, L.ACTION, L.DETAIL, L.IP_ADDRESS, L.TIMESTAMP
        FROM LOGS L
        LEFT JOIN USERS U ON L.USER_ID = U.UserId
        WHERE 1=1
      `;
      
      const params = [];
      
      // Aplicar filtros a ambas consultas
      if (userId) {
        countQuery += ` AND L.USER_ID = ?`;
        dataQuery += ` AND L.USER_ID = ?`;
        params.push(userId);
      }
      
      if (action) {
        countQuery += ` AND L.ACTION = ?`;
        dataQuery += ` AND L.ACTION = ?`;
        params.push(action);
      }
      
      if (startDate) {
        countQuery += ` AND L.TIMESTAMP >= ?`;
        dataQuery += ` AND L.TIMESTAMP >= ?`;
        params.push(new Date(startDate));
      }
      
      if (endDate) {
        countQuery += ` AND L.TIMESTAMP <= ?`;
        dataQuery += ` AND L.TIMESTAMP <= ?`;
        // Añadir un día para incluir el día completo
        const endDateObj = new Date(endDate);
        endDateObj.setDate(endDateObj.getDate() + 1);
        params.push(endDateObj);
      }
      
      // Ordenar y aplicar paginación a la consulta de datos
      dataQuery += ` ORDER BY L.TIMESTAMP DESC`;
      
      // Calcular offset para la paginación
      const offset = (page - 1) * limit;
      dataQuery += ` OFFSET ${offset} ROWS FETCH NEXT ${limit} ROWS ONLY`;
      
      // Ejecutar la consulta de conteo
      const countResult = await this.prisma.$executeRawUnsafe(countQuery, ...params);
      const total = Number(countResult[0].total);
      
      // Ejecutar la consulta de datos
      const logs = await this.prisma.$executeRawUnsafe(dataQuery, ...params);
      
      // Formatear los resultados
      const formattedLogs = Array.isArray(logs) 
        ? logs.map(log => ({
            id: log.LogId,
            userId: log.USER_ID,
            username: log.USERNAME,
            action: log.ACTION,
            detail: log.DETAIL,
            ipAddress: log.IP_ADDRESS,
            createdAt: log.TIMESTAMP
          }))
        : [];
      
      // Calcular el total de páginas
      const totalPages = Math.ceil(total / limit);
      
      return {
        data: formattedLogs,
        meta: {
          total,
          page,
          limit,
          totalPages
        }
      };
    } catch (error) {
      console.error('Error al obtener logs paginados:', error);
      throw new Error('Error al obtener los logs');
    }
  }
}