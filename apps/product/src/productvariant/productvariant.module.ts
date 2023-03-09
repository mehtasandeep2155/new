import { Module } from '@nestjs/common';
import { ProductvariantService } from './productvariant.service';
import { ProductvariantController } from './productvariant.controller';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    ProductvariantService,
    PrismaService,
    ConfigService,
  ],
  controllers: [ProductvariantController],
})
export class ProductvariantModule {}
