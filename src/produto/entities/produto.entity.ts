import { ApiProperty } from '@nestjs/swagger';
import { Transform, TransformFnParams } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsPositive, IsString, Length, } from 'class-validator';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, } from 'typeorm';
import { NumericTransformer } from '../../util/numericTransformer';
import { Categoria } from '../../categoria/entities/categoria.entity';
import { Usuario } from '../../Usuario/entities/usuario.entity';

@Entity({ name: 'tb_produtos' })
export class Produto {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  @ApiProperty()
  nome_produto: string;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  @ApiProperty()
  descricao: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    transformer: new NumericTransformer(),
  })
  preco: number;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ length: 5000, nullable: true })
  @ApiProperty()
  foto: string;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @IsString()
  @Column({ length: 1, nullable: false })
  @ApiProperty()
  nutri_score: string;

  @IsBoolean()
  @Column({ type: 'boolean', default: true })
  @ApiProperty()
  status: boolean;

  @CreateDateColumn()
  criado_em: Date;

  @UpdateDateColumn()
  atualizado_em: Date;

  
  @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;

  @ManyToOne(() => Usuario, (usuario) => usuario.produto, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;
}
