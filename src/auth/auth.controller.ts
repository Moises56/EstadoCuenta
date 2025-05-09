import { Controller, Post, Body, Res, UseGuards, Get, Req, HttpException, HttpStatus } from '@nestjs/common';
import { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto, UserRole } from './dto/create-user.dto';
import { Public } from './decorators/public.decorator';
import { Roles } from './decorators/roles.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { LogService } from '../logs/log.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly logService: LogService,
  ) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Body() loginDto: LoginDto, 
    @Res({ passthrough: true }) response: Response,
    @Req() request: Request,
  ) {
    const { accessToken } = await this.authService.login(loginDto);
    
    // Configurar cookie HTTP-only
    response.cookie('auth_token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Solo HTTPS en producción
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000, // 1 día
    });

    // Obtener el usuario para el log
    const user = await this.authService.findUserByUsername(loginDto.username);
    
    // Registrar el inicio de sesión
    await this.logService.createLog({
      userId: user.id,
      action: 'LOGIN',
      detail: 'Inicio de sesión exitoso',
      ipAddress: request.ip,
    });

    // Devolver información del usuario (sin la contraseña)
    return this.authService.getUserResponse(user);
  }

  @Public()
  @Post('init-admin')
  async initAdmin(@Body() createUserDto: CreateUserDto) {
    try {
      // Verificar si ya existe algún administrador
      const hasAdmin = await this.authService.hasAdminUsers();
      
      if (hasAdmin) {
        throw new HttpException(
          'El sistema ya ha sido inicializado con un administrador', 
          HttpStatus.BAD_REQUEST
        );
      }
      
      // Forzar el rol a ADMIN independientemente de lo que se envíe
      createUserDto.role = UserRole.ADMIN;
      
      // Crear el usuario administrador inicial
      const user = await this.authService.createUser(createUserDto);
      
      return {
        message: 'Administrador inicial creado exitosamente',
        user: this.authService.getUserResponse(user)
      };
    } catch (error) {
      throw new HttpException(
        error.message || 'Error al crear administrador inicial',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Public()
  @Post('activate-user')
  async activateUser(@Body() activateUserDto: { username: string }) {
    try {
      const { username } = activateUserDto;
      
      // Verificar si el usuario existe
      const user = await this.authService.findUserByUsername(username);
      if (!user) {
        throw new HttpException(
          `El usuario ${username} no existe`,
          HttpStatus.NOT_FOUND
        );
      }
      
      // Activar el usuario
      await this.authService.setUserActive(user.id, true);
      
      return {
        message: `Usuario ${username} activado exitosamente`,
        username: user.username
      };
    } catch (error) {
      throw new HttpException(
        error.message || 'Error al activar usuario',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Roles('ADMIN')
  @Post('users')
  async createUser(@Body() createUserDto: CreateUserDto, @Req() request: Request) {
    const user = await this.authService.createUser(createUserDto);
    
    // Registrar la acción en el log
    await this.logService.createLog({
      userId: request.user.id,
      action: 'CREATE_USER',
      detail: `Usuario creado: ${createUserDto.username} con rol: ${createUserDto.role}`,
      ipAddress: request.ip,
    });
    
    return this.authService.getUserResponse(user);
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) response: Response, @Req() request: Request) {
    // Limpiar la cookie
    response.clearCookie('auth_token');
    
    // Registrar cierre de sesión si hay usuario en la solicitud
    if (request.user) {
      await this.logService.createLog({
        userId: request.user.id,
        action: 'LOGOUT',
        detail: 'Cierre de sesión',
        ipAddress: request.ip,
      });
    }
    
    return { message: 'Sesión cerrada correctamente' };
  }

  @Get('profile')
  async getProfile(@Req() req: Request) {
    const user = await this.authService.findUserById(req.user.id);
    return this.authService.getUserResponse(user);
  }

  @Get('test-auth')
  async testAuth(@Req() req: Request) {
    // Este endpoint simplemente devuelve la información del usuario si está autenticado
    return {
      message: 'Autenticación exitosa',
      user: {
        id: req.user.id,
        username: req.user.username,
        role: req.user.role
      },
      requestHeaders: req.headers,
      requestCookies: req.cookies
    };
  }
}