import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsString, IsNumber } from 'class-validator';

export class CreateSaleDto {
  @ApiProperty({ description: 'Fecha de la venta' })
  @IsDateString()
  fecha: Date;

  @ApiProperty({ description: 'Nombre del cliente' })
  @IsString()
  cliente: string;

  @ApiProperty({ description: 'ID del libro vendido' })
  @IsNumber()
  libro: number;

  @ApiProperty({ description: 'Cantidad de libros vendidos' })
  @IsNumber()
  cantidad: number;
}
