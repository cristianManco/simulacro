import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleService } from '../service/sale.service';
import { SaleController } from '../controller/sale.controller';
import { Sale } from '../entities/sale.entity';
import { BookModule } from 'src/books/module/book.module';
import { AuthorModule } from 'src/author/module/author.module';
// import { SalesHourGuard } from './guards/sales-hour.guard';

@Module({
  imports: [TypeOrmModule.forFeature([Sale]), BookModule],
  controllers: [SaleController],
  providers: [SaleService],
  exports: [SaleService],
//   providers: [SaleService, SalesHourGuard],
})
export class SaleModule {}
