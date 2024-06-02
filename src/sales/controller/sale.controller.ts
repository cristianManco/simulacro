import { Controller, Get, Post, Body, Put, Param, Delete, HttpCode, HttpStatus, UseGuards, NotFoundException, Query } from '@nestjs/common';
import { SaleService } from '../service/sale.service';
import { CreateSaleDto } from '../dtos/createSale.dto';
import { UpdateSaleDto } from '../dtos/updateSale.dto';
// import { SalesHourGuard } from './guards/sales-hour.guard';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('sales')
@Controller('sales')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Post()
//   @UseGuards(SalesHourGuard)
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a sale' })
  @ApiResponse({ status: 201, description: 'The sale has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 403, description: 'Sales cannot be processed between 6pm and 6am.' })
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.saleService.create(createSaleDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all sales' })
  @ApiResponse({ status: 200, description: 'Return all sales.' })
  @ApiResponse({ status: 404, description: 'No sales found.' })
  async findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    const sales = await this.saleService.findAll(page, limit);
    if (sales.length === 0) {
      throw new NotFoundException('No sales found');
    }
    return sales;
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get a sale by ID' })
  @ApiResponse({ status: 200, description: 'Return the sale.' })
  @ApiResponse({ status: 404, description: 'Sale not found.' })
  findOne(@Param('id') id: string) {
    return this.saleService.findOne(+id);
  }

  @Get('book/:bookId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get sales by book ID and date' })
  @ApiResponse({ status: 200, description: 'Return sales.' })
  @ApiResponse({ status: 404, description: 'No sales found for the given book ID and date.' })
  findByBookAndDate(
    @Param('bookId') bookId: string,
    @Query('date') date: Date,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.saleService.findByBookAndDate(+bookId, date, page, limit);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update a sale' })
  @ApiResponse({ status: 200, description: 'The sale has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Sale not found.' })
  update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.saleService.update(+id, updateSaleDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a sale' })
  @ApiResponse({ status: 204, description: 'The sale has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Sale not found.' })
  remove(@Param('id') id: string) {
    return this.saleService.remove(+id);
  }
}
