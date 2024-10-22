import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './entities/book.entity';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(+id);
  }

  @Post()
  create(@Body() book: Book) {
    return this.bookService.create(book);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() book: Book) {
    return this.bookService.update(+id, book);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
}
