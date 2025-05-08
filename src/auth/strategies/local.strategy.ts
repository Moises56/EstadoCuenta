import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'username' });
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    
    // Añadir log para depurar el valor isActive
    console.log('LocalStrategy validate:', {
      username: user.username,
      isActive: user.isActive,
      typeofIsActive: typeof user.isActive
    });
    
    // Comprobar si el usuario está activo con una comparación más estricta
    if (user.isActive !== true) {
      throw new UnauthorizedException('Usuario inactivo. Contacte al administrador.');
    }
    
    return user;
  }
}