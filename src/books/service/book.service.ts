import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../entities/book.entity';
import { CreateBookDto } from '../dtos/createBook.dto';
import { UpdateBookDto } from '../dtos/updateBook.dto';
import { Author } from '../../author/entities/author.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const authors = await this.authorRepository.findByIds(
      createBookDto.autores,
    );
    const book = this.bookRepository.create({
      ...createBookDto,
      autores: authors,
    });
    return this.bookRepository.save(book);
  }

  async findAll(page: number, limit: number): Promise<Book[]> {
    const [books, total] = await this.bookRepository.findAndCount({
      relations: ['autores'],
      take: limit,
      skip: (page - 1) * limit,
    });
    return books;
  }

  async findOne(id: number): Promise<Book> {
    const book = await this.bookRepository.findOne({
      where: { id },
      relations: ['autores', 'ventas'],
    });
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    const authors = await this.authorRepository.findByIds(
      updateBookDto.autores,
    );
    await this.bookRepository.update(id, {
      ...updateBookDto,
      autores: authors,
    });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const book = await this.findOne(id);
    await this.bookRepository.softRemove(book);
  }
}
