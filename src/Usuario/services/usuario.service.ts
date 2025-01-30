import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';
import { Bcrypt } from '../../auth/bcrypt/bcrypt';
@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
     private bcrypt: Bcrypt,
  ) {}

  async findByUsuario(usuario: string): Promise<Usuario | undefined> {
    return await this.usuarioRepository.findOne({
      where: {
        usuario: usuario,
      },
      relations: { produto: true },
    });
  }

<<<<<<< HEAD
  async findByNome(nome_usuario: string): Promise<Usuario[]> {
    return this.usuarioRepository.find({
      where: {
        nome_usuario: ILike(`%${nome_usuario}%`),   
      },
      relations: { produto: true },
    });
  }

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find({
      relations: { produto: true },
    });
  }
=======
>>>>>>> bb7c047a7189c7835edd98d37e85b2afbcc4c85d

  async findById(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: {
        id,
      },
      relations: { produto: true }
    });

    if (!usuario)
      throw new HttpException('Usuario não encontrado!', HttpStatus.NOT_FOUND);

    return usuario;
  }

  async create(usuario: Usuario): Promise<Usuario> {
    const buscaUsuario = await this.findByUsuario(usuario.usuario);

    if (buscaUsuario)
      throw new HttpException('O Usuario já existe!', HttpStatus.BAD_REQUEST);

     usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha);
    return await this.usuarioRepository.save(usuario);
  }

  async update(usuario: Usuario): Promise<Usuario> {
    await this.findById(usuario.id);

    const buscaUsuario = await this.findByUsuario(usuario.usuario);

    if (buscaUsuario && buscaUsuario.id !== usuario.id)
      throw new HttpException(
        'Usuário (e-mail) já Cadastrado!',
        HttpStatus.BAD_REQUEST,
      );

     usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha);
    return await this.usuarioRepository.save(usuario);
  }
}
