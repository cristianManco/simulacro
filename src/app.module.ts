import { Module } from '@nestjs/common';
import config from './global/config/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './books/module/book.module';
import { AuthorModule } from './author/module/author.module';
import { SaleModule } from './sales/module/sale.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config().database.host,
      port: config().database.port,
      username: config().database.username,
      password: config().database.password,
      database: config().database.db,
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthorModule,
    BookModule,
    SaleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
