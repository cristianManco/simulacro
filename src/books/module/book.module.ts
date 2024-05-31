import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookService } from '../service/book.service';
import { BookController } from '../controller/book.controller';
import { Book } from '../entities/book.entity';
import { AuthorModule } from 'src/author/module/author.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([Book]),
    AuthorModule,
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
