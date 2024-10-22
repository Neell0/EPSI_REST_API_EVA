import { Controller, Post, Param, Patch } from '@nestjs/common';
import { BorrowService } from './borrow.service';
import { UserService } from '../user/user.service';
import { BookService } from '../book/book.service';

@Controller('borrow')
export class BorrowController {
  constructor(
    private readonly borrowService: BorrowService,
    private readonly userService: UserService,
    private readonly bookService: BookService,
  ) {}

  @Post(':userId/:bookId')
  async borrowBook(@Param('userId') userId: string, @Param('bookId') bookId: string) {
    const user = await this.userService.findOne(+userId);
    const book = await this.bookService.findOne(+bookId);
    return this.borrowService.borrowBook(user, book);
  }

  @Patch('return/:borrowId')
  async returnBook(@Param('borrowId') borrowId: string) {
    return this.borrowService.returnBook(+borrowId);
  }
}
