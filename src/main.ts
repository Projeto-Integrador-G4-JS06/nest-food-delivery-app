import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('PedeAí Delivery App')
    .setDescription('Tá com fome? PedeAí')
    .setContact(
      'Grupo 04 - JS06',
      'https://github.com/Projeto-Integrador-G4-JS06',
      'pi.gen.g4@gmail.com',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);
  process.env.TZ = '-03:00';

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
