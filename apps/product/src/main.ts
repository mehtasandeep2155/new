import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { ProductModule } from './product.module';
import { createDocument } from '../../swagger/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(
    ProductModule,
    { cors: true },
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  SwaggerModule.setup(
    'api/v1',
    app,
    createDocument(app),
  );
  await app.listen(
    process.env.COLOR_PORT || 3303,
  );
  console.info(
    'SERVER IS RUNNING ON PORT',
    process.env.COLOR_PORT || 3303,
  );
}
bootstrap();
