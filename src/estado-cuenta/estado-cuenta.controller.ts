import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  ValidationPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { EstadoCuentaService } from './estado-cuenta.service';
import { GetEstadoCuentaDto } from './dto/get-estado-cuenta.dto';
import { GetEstadoCuentaPorRutaDto } from './dto/get-estado-cuenta-por-ruta.dto';
import { CreateMoraDto } from './dto/create-mora.dto';
import { EstadoCuentaResponseDto } from './dto/estado-cuenta-response.dto';

@Controller('estado-cuenta')
export class EstadoCuentaController {
  constructor(private readonly estadoCuentaService: EstadoCuentaService) {}

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

  @Get('por-ruta')
  async getEstadoCuentaPorRuta(
    @Query(ValidationPipe) getEstadoCuentaPorRutaDto: GetEstadoCuentaPorRutaDto,
  ): Promise<EstadoCuentaResponseDto[]> {
    try {
      return await this.estadoCuentaService.getEstadoCuentaPorRuta(
        getEstadoCuentaPorRutaDto,
      );
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

  @Post()
  async createMora(
    @Body(ValidationPipe) createMoraDto: CreateMoraDto,
  ): Promise<any> {
    try {
      return await this.estadoCuentaService.createMora(createMoraDto);
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
