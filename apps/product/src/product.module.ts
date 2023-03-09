import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ColorModule } from './color/color.module';
import { UomModule } from './uom/uom.module';
import { ProductvariantModule } from './productvariant/productvariant.module';
import { ProducttypeModule } from './producttype/producttype.module';
import { ProductdimensionModule } from './productdimension/productdimension.module';
import { RateModule } from './rate/rate.module';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { PurchaseorderModule } from './purchaseorder/purchaseorder.module';

@Module({
  imports: [
    ColorModule,
    UomModule,
    ProductvariantModule,
    ProducttypeModule,
    ProductdimensionModule,
    RateModule,
    ProductModule,
    PurchaseorderModule,
  ],
  controllers: [ProductController],
  providers: [
    ProductService,
    PrismaService,
    ConfigService,
  ],
})
export class ProductModule {}
