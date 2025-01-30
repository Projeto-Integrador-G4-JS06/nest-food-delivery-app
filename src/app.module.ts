import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categoria/categoria.module';
<<<<<<< HEAD
import { ProdutoModule } from './produto/produto.module';
import { UsuarioModule } from './Usuario/usuario.module';

=======
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
>>>>>>> bb7c047a7189c7835edd98d37e85b2afbcc4c85d
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_food_delivery_app', // Cadastrar o nome do BD
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
<<<<<<< HEAD
    CategoriaModule,
    ProdutoModule,
=======
    AuthModule,
    CategoriaModule,
>>>>>>> bb7c047a7189c7835edd98d37e85b2afbcc4c85d
    UsuarioModule,
    // Inserir nome da classe module de cada entidade (ex.: PostagemModule)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
