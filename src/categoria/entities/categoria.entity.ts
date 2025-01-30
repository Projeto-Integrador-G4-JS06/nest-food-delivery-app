import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";


@Entity({name: "tb_categorias"})
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    nome_categoria: string;

    @Column({ type: 'boolean', nullable: false, default: true })
    @IsNotEmpty()
    status: boolean;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    descricao: string;

    @CreateDateColumn()
    criado_em: Date;
    
    @UpdateDateColumn()
    atualizado_em: Date;

    @OneToMany(() => Produto, (produto) => produto.categoria)
    produto: Produto[];
    
}