import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateAuthorDto {
  @ApiProperty({ description: 'Nombre del autor' })
  @IsString()
  nombre: string;

  @ApiProperty({ description: 'Apellido del autor' })
  @IsString()
  apellido: string;

  @ApiProperty({ description: 'Fecha de nacimiento del autor', required: false })
  @IsOptional()
  @IsDateString()
  fecha_nacimiento?: Date;

  @ApiProperty({ description: 'Nacionalidad del autor', required: false })
  @IsOptional()
  @IsString()
  nacionalidad?: string;

  @ApiProperty({ description: 'Biografía del autor', required: false })
  @IsOptional()
  @IsString()
  biografia?: string;
}
