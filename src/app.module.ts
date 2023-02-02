import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createBook } from './Entities/books.entity';
import { BooksModule } from './books.module';

const db =  TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'a',
  entities: [createBook],
  synchronize: true,
})

@Module({
  imports: [BooksModule, db],
 
controllers: [],
  providers: [],
})
export class AppModule {}
