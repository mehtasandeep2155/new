import { Module } from '@nestjs/common';
import { PurchaseorderService } from './purchaseorder.service';
import { PurchaseorderController } from './purchaseorder.controller';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    PurchaseorderService,
    PrismaService,
    ConfigService,
  ],
  controllers: [PurchaseorderController],
})
export class PurchaseorderModule {}
