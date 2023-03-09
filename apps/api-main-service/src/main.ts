import * as dotenv from 'dotenv';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ApiMainServiceModule } from './api-main-service.module';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from '../../swagger/swagger';
import 'reflect-metadata';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(
    ApiMainServiceModule,
    { cors: true },
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  // app.connectMicroservice({
  //   transport: Transport.TCP,
  //   options: {
  //     port: process.env.USER_PORT || 3302,
  //   },
  // });
  SwaggerModule.setup(
    'api/v1',
    app,
    createDocument(app),
  );
  await app.startAllMicroservices();
  await app.listen(process.env.USER_PORT || 3302);
  console.info(
    'SERVER IS RUNNING ON PORT',
    process.env.USER_PORT || 3302,
  );
}
bootstrap();
