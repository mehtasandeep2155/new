import { Module } from '@nestjs/common';
import { ProductdimensionService } from './productdimension.service';
import { ProductdimensionController } from './productdimension.controller';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    ProductdimensionService,
    PrismaService,
    ConfigService,
  ],
  controllers: [ProductdimensionController],
})
export class ProductdimensionModule {}
