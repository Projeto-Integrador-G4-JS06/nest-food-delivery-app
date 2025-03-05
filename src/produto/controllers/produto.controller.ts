import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseFloatPipe,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../entities/produto.entity';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';

@ApiTags('Produto')
@UseGuards(JwtAuthGuard)
@Controller('/produtos')
@ApiBearerAuth()
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }

  @Get('/healthy')
  @HttpCode(HttpStatus.OK)
  findByNutriScore(): Promise<Produto[]> {
    return this.produtoService.findByNutriScore();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
    return this.produtoService.findById(id);
  }

  // @Get('/fornecedor/:nome_usuario')
  // @HttpCode(HttpStatus.OK)
  // async findByFornecedor(
  //   @Param('nome_usuario') nome_usuario: string,
  // ): Promise<Produto[]> {
  //   return await this.produtoService.findByFornecedor(nome_usuario);
  // }

  @Get('nome/:nome_produto')
  @HttpCode(HttpStatus.OK)
  findByNome(@Param('nome_produto') nome_produto: string): Promise<Produto[]> {
    return this.produtoService.findByNome(nome_produto);
  }

  @Get('maior/:valor')
  @HttpCode(HttpStatus.OK)
  findMaiorValor(
    @Param('valor', ParseFloatPipe) valor: number,
  ): Promise<Produto[]> {
    return this.produtoService.findMaiorValor(valor);
  }

  @Get('menor/:valor')
  @HttpCode(HttpStatus.OK)
  findMenorValor(
    @Param('valor', ParseFloatPipe) valor: number,
  ): Promise<Produto[]> {
    return this.produtoService.findMenorValor(valor);
  }

  @Get('/status/:status')
  async findByStatus(@Param('status') status: string): Promise<Produto[]> {
    return this.produtoService.findByStatus(status.toLowerCase() === 'true');
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.create(produto);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.update(produto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.produtoService.delete(id);
  }
}
