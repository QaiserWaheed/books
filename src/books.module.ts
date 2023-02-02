import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createBook } from './Entities/books.entity';
import { create } from './Services/CreateBook';
@Module({
imports : [TypeOrmModule.forFeature([createBook])],
controllers: [BooksController],
providers: [create],
})
export class BooksModule {}
