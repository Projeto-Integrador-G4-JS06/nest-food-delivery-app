import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Produto } from '../entities/produto.entity';
import {
  DeleteResult,
  ILike,
  In,
  LessThan,
  ManyToOne,
  MoreThan,
  Repository,
} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaService } from '../../categoria/services/categoria.service';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
    private categoriaService: CategoriaService,
  ) {}

  async findAll(): Promise<Produto[]> {
    return this.produtoRepository.find({
      relations: { categoria: true },
    });
  }

  async findByNutriScore(): Promise<Produto[]> {
    return this.produtoRepository.find({
      // where: { nutri_score: In(['A', 'B'])},
      where: [{ nutri_score: 'A' }, { nutri_score: 'B' }],
    });
  }

  async findById(id: number): Promise<Produto> {
    const postagem = await this.produtoRepository.findOne({
      where: { id },
      relations: { categoria: true },
    });

    if (!postagem)
      throw new HttpException(
        `Produto com id ${id} não encontrado.`,
        HttpStatus.NOT_FOUND,
      );

    return postagem;
  }

  async findByFornecedor(nome_usuario: string): Promise<Produto[]> {
    return this.produtoRepository
      .createQueryBuilder('p')
      .innerJoinAndSelect('p.usuario', 'u')
      .where('u.nome_usuario = :nome_usuario', { nome_usuario })
      .andWhere('u.tipo = :tipo', { tipo: 'fornecedor' })
      .getMany();
  }

  async findByNome(nome_produto: string): Promise<Produto[]> {
    return this.produtoRepository.find({
      where: { nome_produto: ILike(`%${nome_produto}%`) },
      relations: { categoria: true },
    });
  }

  async findMaiorValor(valor: number): Promise<Produto[]> {
    return this.produtoRepository.find({
      where: { preco: MoreThan(valor) },
      relations: { categoria: true },
      order: { preco: 'ASC' },
    });
  }

  async findMenorValor(valor: number): Promise<Produto[]> {
    return this.produtoRepository.find({
      where: { preco: LessThan(valor) },
      relations: { categoria: true },
      order: { preco: 'DESC' },
    });
  }

  async findByStatus(status: boolean): Promise<Produto[]> {
    return this.produtoRepository.find({
      where: { status },
    });
  }

  async create(produto: Produto): Promise<Produto> {
    // Verifica se o produto existe antes de criar
    await this.categoriaService.findById(produto.categoria.id);

    return await this.produtoRepository.save(produto);
  }

  async update(produto: Produto): Promise<Produto> {
    // Verifica se o produto existe antes de atualizar
    await this.findById(produto.id);

    await this.categoriaService.findById(produto.categoria.id);

    // Atualiza os dados da postagem
    return await this.produtoRepository.save(produto);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return this.produtoRepository.delete(id);
  }
}
