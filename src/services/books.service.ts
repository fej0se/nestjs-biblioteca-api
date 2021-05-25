import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from 'src/models/book.model';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book)
    private bookModel: typeof Book,
  ) {}

  async getAll(): Promise<Book[]> {
    return this.bookModel.findAll();
  }

  async getOne(id: number): Promise<Book> {
    return this.bookModel.findByPk(id);
  }

  async create(book: Book) {
    this.bookModel.create(book);
  }

  async update(book: Book): Promise<[number, Book[]]> {
    return this.bookModel.update(book, {
      where: {
        id: book.id,
      },
    });
  }

  async delete(id: number) {
    const book: Book = await this.getOne(id);
    if (book) {
      book.destroy();
      return { deletado: book.nome };
    } else {
      throw new NotFoundException('Book not found');
    }
  }
}
