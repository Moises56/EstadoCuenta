import { Controller, Get, UseGuards, Param, Query } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '../auth/dto/create-user.dto';
import { Public } from '../auth/decorators/public.decorator';

@Controller('dashboard')
@UseGuards(JwtAuthGuard, RolesGuard)
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('resumen')
  @Roles(UserRole.ADMIN, UserRole.SUPERVISOR, UserRole.OPERADOR)
  async getResumen() {
    return this.dashboardService.getResumen();
  }

  @Get('resumen-por-colonia')
  @Roles(UserRole.ADMIN, UserRole.SUPERVISOR)
  async getResumenPorColonia() {
    return this.dashboardService.getResumenPorColonia();
  }

  @Get('resumen-anual')
  @Roles(UserRole.ADMIN, UserRole.SUPERVISOR)
  async getResumenAnual() {
    return this.dashboardService.getResumenAnual();
  }

  @Get('resumen-por-ruta/:ruta')
  @Roles(UserRole.ADMIN, UserRole.SUPERVISOR)
  async getResumenPorRuta(@Param('ruta') ruta: string) {
    return this.dashboardService.getResumenPorRuta(ruta);
  }
}