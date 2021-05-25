import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('produtos ')
export class ProdutosController {
  @Get()
  obterProdutos(): string {
    return 'Produtos';
  }

  @Get(':id')
  pesquisaProduto(@Param() params): string {
    return `Produto: ${params.id}`;
  }

  @Post()
  criarProduto(@Body() produto): string {
    return `Produto criado ${produto}`;
  }

  @Put()
  atualizarProduto(@Body() produto): string {
    return `Produto criado ${produto}`;
  }

  @Delete(':id')
  apagarProduto(@Param() params): string {
    return `Produto ${params.id} excluído`;
  }
}
