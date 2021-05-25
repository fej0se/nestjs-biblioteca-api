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

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async obterProdutos(): Promise<Book[]> {
    return this.booksService.getAll();
  }

  @Get(':id')
  async pesquisaProduto(@Param() params): Promise<Book> {
    return this.booksService.getOne(params.id);
  }

  @Get('/search/:word')
  async pesquisa(@Param() params): Promise<Book[]> {
    return this.booksService.search(params.word);
  }

  @Post()
  async criarProduto(@Body() produto) {
    this.booksService.create(produto);
  }

  @Put()
  async atualizarProduto(@Body() produto): Promise<[number, Book[]]> {
    return this.booksService.update(produto);
  }

  @Delete(':id')
  async apagarProduto(@Param() params): Promise<any> {
    return this.booksService.delete(params.id);
  }
}
