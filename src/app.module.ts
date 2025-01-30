import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: '', // Cadastrar o nome do BD
    autoLoadEntities: true, // Cadastrar as Classes Entities, para que o 
    // TypeORM possa gerar as tabelas correspondentes no BD
    synchronize: true,
    logging: true
  }),
  AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
