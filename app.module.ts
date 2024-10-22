import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { BorrowModule } from './borrow/borrow.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'library.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Dev only - syncs the database automatically
    }),
    BookModule,
    UserModule,
    BorrowModule,
  ],
})
export class AppModule {}
