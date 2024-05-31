import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsDateString, IsNumber, IsArray } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({ description: 'Título del libro' })
  @IsString()
  titulo: string;

  @ApiProperty({ description: 'Descripción del libro', required: false })
  @IsOptional()
  @IsString()
  descripcion?: string;

  @ApiProperty({ description: 'Fecha de publicación del libro' })
  @IsDateString()
  fecha_publicacion: Date;

  @ApiProperty({ description: 'Precio del libro' })
  @IsNumber()
  precio: number;

  @ApiProperty({ description: 'IDs de los autores del libro', type: [Number] })
  @IsArray()
  autores: number[];
}
