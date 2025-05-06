import {
  Controller,
  Get,
  Query,
  ValidationPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { EstadoCuentaService } from './estado-cuenta.service';
import { GetEstadoCuentaDto } from './dto/get-estado-cuenta.dto';
import { GetEstadoCuentaPorRutaDto } from './dto/get-estado-cuenta-por-ruta.dto';
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
}
