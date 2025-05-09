import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    // Verificar si la ruta es pública
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    // Agregar logs para depuración
    console.log('Verificando autenticación JWT para:', {
      controller: context.getClass().name,
      handler: context.getHandler().name,
    });

    // Continuar con la autenticación JWT normal
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    // Agregar logs para depuración
    console.log('JwtAuthGuard handleRequest:', { error: err?.message, userExists: !!user, info });

    // Si hay un error o no hay usuario (y no es una ruta pública), lanzar excepción
    if (err || !user) {
      throw err || new UnauthorizedException('No autenticado');
    }
    return user;
  }
}