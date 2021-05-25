import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from 'src/services/books.service';
import { Book } from '../models/book.model';

@Controller('books ')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  obterProdutos(): Array<Book> {
    return this.booksService.getAll();
  }

  @Get(':id')
  pesquisaProduto(@Param() params): Book {
    return this.booksService.getOne(params.id);
  }

  @Post()
  criarProduto(@Body() produto): void {
    this.booksService.create(produto);
  }

  @Put()
  atualizarProduto(@Body() produto): Book {
    return this.booksService.update(produto);
  }

  @Delete(':id')
  apagarProduto(@Param() params): void {
    this.booksService.delete(params.id);
  }
}
