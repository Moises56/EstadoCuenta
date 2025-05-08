import { Controller, Get, Post, Body, Query, ValidationPipe, HttpException, HttpStatus, Req } from '@nestjs/common';
import { EstadoCuentaService } from './estado-cuenta.service';
import { GetEstadoCuentaDto } from './dto/get-estado-cuenta.dto';
import { GetEstadoCuentaPorRutaDto } from './dto/get-estado-cuenta-por-ruta.dto';
import { CreateMoraDto } from './dto/create-mora.dto';
import { EstadoCuentaResponseDto } from './dto/estado-cuenta-response.dto';
import { LogService } from '../logs/log.service';
import { Roles } from '../auth/decorators/roles.decorator';
import { Public } from '../auth/decorators/public.decorator';
import { Request } from 'express';

@Controller('estado-cuenta')
export class EstadoCuentaController {
  constructor(
    private readonly estadoCuentaService: EstadoCuentaService,
    private readonly logService: LogService
  ) {}

  @Public() // Endpoint público, no requiere autenticación
  @Get()
  async getEstadoCuenta(
    @Query(ValidationPipe) getEstadoCuentaDto: GetEstadoCuentaDto,
  ): Promise<EstadoCuentaResponseDto> {
    try {
      return await this.estadoCuentaService.getEstadoCuenta(getEstadoCuentaDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: error.message,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Roles('ADMIN', 'OPERADOR') // Solo administradores y operadores pueden acceder
  @Get('por-ruta')
  async getEstadoCuentaPorRuta(
    @Query(ValidationPipe) getEstadoCuentaPorRutaDto: GetEstadoCuentaPorRutaDto,
    @Req() request: Request
  ): Promise<EstadoCuentaResponseDto[]> {
    try {
      // Registrar la acción en el log
      await this.logService.createLog({
        userId: request.user.id,
        action: 'CONSULTA_POR_RUTA',
        detail: `Consulta de estado de cuenta por ruta: ${getEstadoCuentaPorRutaDto.ruta}`,
        ipAddress: request.ip,
      });

      return await this.estadoCuentaService.getEstadoCuentaPorRuta(getEstadoCuentaPorRutaDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: error.message,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Roles('ADMIN') // Solo administradores pueden crear registros de mora
  @Post()
  async createMora(
    @Body(ValidationPipe) createMoraDto: CreateMoraDto,
    @Req() request: Request
  ): Promise<any> {
    try {
      const result = await this.estadoCuentaService.createMora(createMoraDto);
      
      // Registrar la acción en el log
      await this.logService.createLog({
        userId: request.user.id,
        action: 'CREAR_MORA',
        detail: `Creación de registro de mora para clave catastral: ${createMoraDto.artIdDoc}, año: ${createMoraDto.oblYear}`,
        ipAddress: request.ip,
      });
      
      return result;
    } catch (error) {
      throw new HttpException(
        {
          status: error.status || HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }
}
