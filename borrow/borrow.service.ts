import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Borrow } from './entities/borrow.entity';
import { User } from '../user/entities/user.entity';
import { Book } from '../book/entities/book.entity';

@Injectable()
export class BorrowService {
  constructor(
    @InjectRepository(Borrow)
    private readonly borrowRepository: Repository<Borrow>,
  ) {}

  async borrowBook(user: User, book: Book): Promise<Borrow> {
    const borrow = this.borrowRepository.create({ user, book });
    return this.borrowRepository.save(borrow);
  }

  async returnBook(borrowId: number): Promise<Borrow> {
    const borrow = await this.borrowRepository.findOneBy({ id: borrowId });
    borrow.returnDate = new Date();
    return this.borrowRepository.save(borrow);
  }
}
