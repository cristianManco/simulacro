import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThanOrEqual } from 'typeorm';
import { Sale } from '../entities/sale.entity';
import { CreateSaleDto } from '../dtos/createSale.dto';
import { UpdateSaleDto } from '../dtos/updateSale.dto';
import { Book } from '../../books/entities/book.entity';

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale)
    private readonly saleRepository: Repository<Sale>,
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async create(createSaleDto: CreateSaleDto): Promise<Sale> {
    const currentHour = new Date().getHours();
    if (currentHour >= 18 || currentHour < 6) {
      throw new ForbiddenException(
        'Sales cannot be processed between 6pm and 6am',
      );
    }

    const book = await this.bookRepository.findOne({
      where: { id: createSaleDto.libro },
    });
    if (!book) {
      throw new NotFoundException(
        `Book with ID ${createSaleDto.libro} not found`,
      );
    }

    const sale = this.saleRepository.create({
      ...createSaleDto,
      libro: book,
      total: book.precio * createSaleDto.cantidad,
    });

    return this.saleRepository.save(sale);
  }


  async findAll(page: number, limit: number): Promise<Sale[]> {
    const [sales, total] = await this.saleRepository.findAndCount({
      relations: ['libro'],
      take: limit,
      skip: (page - 1) * limit,
    });
    
    return sales;
  }

  async findOne(id: number): Promise<Sale> {
    const sale = await this.saleRepository.findOne({
      where: { id },
      relations: ['libro'],
    });
    if (!sale) {
      throw new NotFoundException(`Sale with ID ${id} not found`);
    }
    return sale;
  }

  async findByBookAndDate(
    bookId: number,
    date: Date,
    page: number,
    limit: number,
  ): Promise<Sale[]> {
    return this.saleRepository.find({
      where: {
        libro: { id: bookId },
        fecha: MoreThanOrEqual(date),
      },
      order: {
        fecha: 'ASC',
      },
      take: limit,
      skip: (page - 1) * limit,
      relations: ['libro'],
    });
  }

  async update(id: number, updateSaleDto: UpdateSaleDto): Promise<Sale> {
    if (updateSaleDto.libro) {
      const book = await this.saleRepository.findOne({
        where: { id: updateSaleDto.libro },
      });
      if (!book) {
        throw new NotFoundException(
          `Book with ID ${updateSaleDto.libro} not found`,
        );
      }
      updateSaleDto = { ...updateSaleDto, libro: book.id };
    }

    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const sale = await this.findOne(id);
    await this.saleRepository.softRemove(sale);
  }
}
