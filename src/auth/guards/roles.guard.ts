import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Obtener roles requeridos desde el decorador
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // Si no hay roles requeridos, permitir acceso
    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    // Obtener el usuario del request (ya procesado por JwtAuthGuard)
    const { user } = context.switchToHttp().getRequest();
    
    // Verificar si el usuario existe y tiene el rol requerido
    if (!user) {
      throw new ForbiddenException('No se pudo verificar los permisos del usuario');
    }

    const hasRole = requiredRoles.some(role => role === user.role);
    
    if (!hasRole) {
      throw new ForbiddenException('No tiene permisos para acceder a este recurso');
    }
    
    return true;
  }
}