import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorService } from '../service/author.service';
import { AuthorController } from '../controller/author.controller';
import { Author } from '../entities/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  exports: [TypeOrmModule],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {}
