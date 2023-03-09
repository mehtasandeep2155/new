import { Module } from '@nestjs/common';
import { ProducttypeService } from './producttype.service';
import { ProducttypeController } from './producttype.controller';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    ProducttypeService,
    PrismaService,
    ConfigService,
  ],
  controllers: [ProducttypeController],
})
export class ProducttypeModule {}
