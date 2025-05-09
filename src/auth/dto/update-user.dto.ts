import { IsString, IsNotEmpty, IsEmail, MinLength, IsEnum, IsOptional, IsBoolean } from 'class-validator';
import { UserRole } from './create-user.dto';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Debe proporcionar un email válido' })
  email?: string;

  @IsOptional()
  @IsString()
  fullName?: string;

  @IsOptional()
  @IsEnum(UserRole, { message: 'Rol inválido. Debe ser ADMIN, OPERADOR o USER' })
  role?: UserRole;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}