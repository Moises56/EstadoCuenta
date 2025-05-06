import { IsNotEmpty, IsString } from 'class-validator';

export class GetEstadoCuentaDto {
  @IsNotEmpty()
  @IsString()
  claveCatastral: string;
}
