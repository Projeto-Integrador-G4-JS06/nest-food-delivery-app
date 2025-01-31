import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categoria/categoria.module';
import { ProdutoModule } from './produto/produto.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_food_delivery_appa', // Cadastrar o nome do BD
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    AuthModule,
    CategoriaModule,
    UsuarioModule,
    ProdutoModule,
    // Inserir nome da classe module de cada entidade (ex.: PostagemModule)
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
