import { IsNotEmpty, IsString } from 'class-validator';

export class GetEstadoCuentaPorRutaDto {
  @IsNotEmpty()
  @IsString()
  ruta: string;
}
