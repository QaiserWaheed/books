import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { domainToUnicode } from 'url';
import { createBook } from './Entities/books.entity';
import { create, DeleteBook, FindBook, UpdateBook } from './Services/CreateBook';

@Controller('books')
export class BooksController {
    
    
constructor(  @InjectRepository(createBook) private userepo: Repository<createBook>) {}


@Post('/add')

Add(@Body() book:create ){
const added = this.userepo.save([book]);
return added;
}

@Post('/find')

Find(@Body() find : FindBook){
    const found = this.userepo.findOneBy({id: find.id})
    return found;
}



@Post('update_Book')
async Update_Book(@Body() Updatebook : UpdateBook){
    const found = await this.userepo.findOneBy({id: Updatebook.id })
    if(found != null){
        return await this.userepo.update({id:Updatebook.id},{BookName: Updatebook.BookName, Author:Updatebook.Author, BookPrice:Updatebook.BookPrice});
        
    }
    else {
        return "Book Not Found"
    }

}


@Delete('DeleteBook')
Delete_book(@Body() DeleteBook : DeleteBook){
    const Deletbook = this.userepo.delete({id:DeleteBook.id})
    return Deletbook;
   }

}


