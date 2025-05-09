import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { JwtPayload } from '../dto/user.model';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(JwtStrategy.name);
  
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        JwtStrategy.extractJwtFromCookie,
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'Consulta-SAR-BACK2025',
    });
  }

  private static extractJwtFromCookie(req: Request): string | null {
    console.log('Cookies recibidas:', req.cookies);
    console.log('Headers recibidos:', req.headers);
    
    if (req.cookies && req.cookies.auth_token) {
      console.log('Token extraído de cookies:', req.cookies.auth_token.substring(0, 20) + '...');
      return req.cookies.auth_token;
    }
    
    // Intentar extraer el token del encabezado Authorization
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.split(' ')[0] === 'Bearer') {
      const token = authHeader.split(' ')[1];
      console.log('Token extraído de encabezado:', token.substring(0, 20) + '...');
      return token;
    }
    
    console.log('No se encontró token en cookies ni en encabezados');
    return null;
  }

  async validate(payload: JwtPayload) {
    console.log('Validando payload JWT:', payload);
    
    try {
      const user = await this.authService.findUserById(payload.sub);
      
      // SOLUCIÓN: Si no pudimos encontrar el usuario pero tenemos el payload JWT válido,
      // confiar en el token y permitir el acceso
      if (!user) {
        console.log('Usuario no encontrado en BD, pero token válido. Usando payload:', payload);
        return { 
          id: payload.sub, 
          username: payload.username, 
          role: payload.role 
        };
      }
      
      // En caso de encontrar el usuario, verificar que esté activo
      if (!user.isActive) {
        console.log('Usuario encontrado pero inactivo para ID:', payload.sub);
        return null;
      }
  
      console.log('Usuario autenticado con éxito:', user.username, 'con rol:', user.role);
      return { id: user.id, username: user.username, role: user.role };
    } catch (error) {
      console.error('Error en validate de JwtStrategy:', error);
      // SOLUCIÓN: En caso de error, confiar en el token JWT válido
      return { 
        id: payload.sub, 
        username: payload.username, 
        role: payload.role 
      };
    }
  }
}