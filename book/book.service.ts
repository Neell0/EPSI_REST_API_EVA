import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  findOne(id: number): Promise<Book> {
    return this.bookRepository.findOneBy({ id });
  }

  create(book: Book): Promise<Book> {
    return this.bookRepository.save(book);
  }

  update(id: number, book: Book): Promise<Book> {
    return this.bookRepository.save({ ...book, id });
  }

  remove(id: number): Promise<void> {
    return this.bookRepository.delete(id).then(() => undefined);
  }
}
