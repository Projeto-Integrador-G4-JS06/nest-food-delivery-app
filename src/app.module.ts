import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categoria/categoria.module';
import { ProdutoModule } from './produto/produto.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { ProdService } from './data/prod.service';
import { DevService } from './data/dev.service';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: DevService,
      imports: [ConfigModule],
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
