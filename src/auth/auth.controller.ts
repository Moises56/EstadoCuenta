import { Controller, Post, Body, Res, UseGuards, Get, Req, HttpException, HttpStatus, Param, Put, Delete, Query } from '@nestjs/common';
import { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto, UserRole } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { Public } from './decorators/public.decorator';
import { Roles } from './decorators/roles.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { LogService } from '../logs/log.service';
import { PaginationDto, PaginatedResult } from '../common/dto/pagination.dto';

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

  @Roles('ADMIN')
  @Get('users')
  async getAllUsers(
    @Query() paginationDto: PaginationDto,
    @Req() request: Request
  ) {
    try {
      const { page, limit } = paginationDto;
      const users = await this.authService.getAllUsers(page, limit);
      
      // Registrar la acción en el log
      await this.logService.createLog({
        userId: request.user.id,
        action: 'GET_ALL_USERS',
        detail: `Consulta de usuarios - Página: ${page}, Límite: ${limit}`,
        ipAddress: request.ip,
      });
      
      return users;
    } catch (error) {
      throw new HttpException(
        error.message || 'Error al obtener los usuarios',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Roles('ADMIN')
  @Get('users/:id')
  async getUserById(@Param('id') userId: string, @Req() request: Request) {
    try {
      const user = await this.authService.findUserById(userId);
      
      if (!user) {
        throw new HttpException(
          `Usuario con ID ${userId} no encontrado`,
          HttpStatus.NOT_FOUND
        );
      }
      
      // Registrar la acción en el log
      await this.logService.createLog({
        userId: request.user.id,
        action: 'GET_USER',
        detail: `Consulta de usuario con ID: ${userId}`,
        ipAddress: request.ip,
      });
      
      return this.authService.getUserResponse(user);
    } catch (error) {
      throw new HttpException(
        error.message || 'Error al obtener el usuario',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Roles('ADMIN')
  @Put('users/:id')
  async updateUser(
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateUserDto,
    @Req() request: Request
  ) {
    try {
      const updatedUser = await this.authService.updateUser(userId, updateUserDto);
      
      // Registrar la acción en el log
      await this.logService.createLog({
        userId: request.user.id,
        action: 'UPDATE_USER',
        detail: `Actualización de usuario con ID: ${userId}`,
        ipAddress: request.ip,
      });
      
      return this.authService.getUserResponse(updatedUser);
    } catch (error) {
      throw new HttpException(
        error.message || 'Error al actualizar el usuario',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Roles('ADMIN')
  @Post('users/:id/change-password')
  async adminChangePassword(
    @Param('id') userId: string,
    @Body() body: { newPassword: string },
    @Req() request: Request
  ) {
    try {
      // Para administradores, simplificar el cambio de contraseña
      if (!body.newPassword) {
        throw new HttpException(
          'La nueva contraseña es requerida',
          HttpStatus.BAD_REQUEST
        );
      }
      
      // Verificar que el usuario existe
      const user = await this.authService.findUserById(userId);
      if (!user) {
        throw new HttpException(
          `Usuario con ID ${userId} no encontrado`,
          HttpStatus.NOT_FOUND
        );
      }
      
      // Usar un DTO simplificado para cambiar la contraseña del admin
      const changePasswordDto: ChangePasswordDto = {
        currentPassword: null, // No necesitamos la contraseña actual para admin
        newPassword: body.newPassword,
        confirmPassword: body.newPassword
      };
      
      // Usar el método adecuado del servicio
      await this.authService.adminResetPassword(userId, body.newPassword);
      
      // Registrar la acción en el log
      await this.logService.createLog({
        userId: request.user.id,
        action: 'ADMIN_CHANGE_PASSWORD',
        detail: `Cambio de contraseña para usuario con ID: ${userId}`,
        ipAddress: request.ip,
      });
      
      return { message: 'Contraseña actualizada correctamente' };
    } catch (error) {
      throw new HttpException(
        error.message || 'Error al cambiar la contraseña',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Post('change-password')
  async changePassword(
    @Body() changePasswordDto: ChangePasswordDto,
    @Req() request: Request
  ) {
    try {
      await this.authService.changeUserPassword(request.user.id, changePasswordDto);
      
      // Registrar la acción en el log
      await this.logService.createLog({
        userId: request.user.id,
        action: 'CHANGE_PASSWORD',
        detail: 'Cambio de contraseña propio',
        ipAddress: request.ip,
      });
      
      return { message: 'Contraseña actualizada correctamente' };
    } catch (error) {
      throw new HttpException(
        error.message || 'Error al cambiar la contraseña',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Roles('ADMIN')
  @Delete('users/:id')
  async deleteUser(@Param('id') userId: string, @Req() request: Request) {
    try {
      await this.authService.deleteUser(userId);
      
      // Registrar la acción en el log
      await this.logService.createLog({
        userId: request.user.id,
        action: 'DELETE_USER',
        detail: `Eliminación de usuario con ID: ${userId}`,
        ipAddress: request.ip,
      });
      
      return { message: 'Usuario eliminado correctamente' };
    } catch (error) {
      throw new HttpException(
        error.message || 'Error al eliminar el usuario',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Roles('ADMIN')
  @Get('logs')
  async getLogs(
    @Query() paginationDto: PaginationDto,
    @Query('userId') userId: string,
    @Query('action') action: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
    @Req() request: Request
  ) {
    try {
      // Usar el LogService para obtener logs paginados
      const paginatedLogs = await this.logService.getLogs(
        paginationDto.page,
        paginationDto.limit,
        userId,
        action,
        startDate,
        endDate
      );
      
      // Registrar la acción en el log
      await this.logService.createLog({
        userId: request.user.id,
        action: 'GET_LOGS',
        detail: `Consulta de logs - Página: ${paginationDto.page}, Límite: ${paginationDto.limit}`,
        ipAddress: request.ip,
      });
      
      return paginatedLogs;
    } catch (error) {
      console.error('Error al obtener logs:', error);
      throw new HttpException(
        error.message || 'Error al obtener los logs',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}