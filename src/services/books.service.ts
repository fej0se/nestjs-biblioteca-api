import { Injectable } from '@nestjs/common';
import { Book } from 'src/models/book.model';

@Injectable()
export class BooksService {
  getAll(): Array<Book> {
    return;
  }

  getOne(id: number): Book {
    return;
  }

  create(book: Book): void {}

  update(book: Book): Book {
    return book;
  }

  delete(id: number): void {}
}
