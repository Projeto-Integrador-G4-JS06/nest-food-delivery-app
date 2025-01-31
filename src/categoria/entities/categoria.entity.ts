import { ApiProperty } from '@nestjs/swagger';

import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";


@Entity({name: "tb_categorias"})
export class Categoria {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty()
    nome_categoria: string;

    @Column({ type: 'boolean', nullable: false, default: true })
    @IsNotEmpty()
    @ApiProperty()
    status: boolean;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty()
    descricao: string;

    @CreateDateColumn()
    criado_em: Date;
    
    @UpdateDateColumn()
    atualizado_em: Date;

    @ApiProperty()
    @OneToMany(() => Produto, (produto) => produto.categoria)
    produto: Produto[];
    
}