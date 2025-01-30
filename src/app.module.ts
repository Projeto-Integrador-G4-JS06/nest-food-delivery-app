import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './Usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_food_delivery_app',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
  UsuarioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
