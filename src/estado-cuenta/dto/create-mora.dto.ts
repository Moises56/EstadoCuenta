import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsDecimal,
} from 'class-validator';

export class CreateMoraDto {
  @IsNotEmpty()
  @IsString()
  artIdDoc: string; // Clave catastral

  @IsNotEmpty()
  @IsString()
  actIdCard: string; // Identidad

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  sectorColonia: string;

  @IsNotEmpty()
  @IsString()
  nombreColonia: string;

  @IsNotEmpty()
  @IsString()
  oblYear: string; // Año

  @IsNotEmpty()
  @IsNumber()
  dias: number;

  @IsOptional()
  @IsDecimal()
  impuesto?: number;

  @IsOptional()
  @IsDecimal()
  trenDeAseo?: number;

  @IsOptional()
  @IsDecimal()
  tasaBomberos?: number;
}
