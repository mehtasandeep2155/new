import { ApiProperty } from '@nestjs/swagger';
import {
  ProductSubType,
  ProductType,
} from '@prisma/client';
import { IsEnum } from 'class-validator';

export class ProductTypeDto {
  @ApiProperty()
  @IsEnum(ProductType)
  type: ProductType;

  @ApiProperty()
  @IsEnum(ProductSubType)
  subtype: ProductSubType;
}
