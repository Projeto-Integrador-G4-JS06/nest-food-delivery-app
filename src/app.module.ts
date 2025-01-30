import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categoria/categoria.module';
import { UsuarioModule } from './Usuario/usuario.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_food_delivery_app', // Cadastrar o nome do BD
    autoLoadEntities: true,
    synchronize: true,
    logging: true
  }),
      CategoriaModule,
      UsuarioModule
  // Inserir nome da classe module de cada entidade (ex.: PostagemModule)

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
