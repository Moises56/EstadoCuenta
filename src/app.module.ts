import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstadoCuentaModule } from './estado-cuenta/estado-cuenta.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { LogModule } from './logs/log.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { RolesGuard } from './auth/guards/roles.guard';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    PrismaModule, 
    EstadoCuentaModule,
    AuthModule,
    LogModule,
    DashboardModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // Aplicar JwtAuthGuard globalmente
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    // Aplicar RolesGuard globalmente
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
