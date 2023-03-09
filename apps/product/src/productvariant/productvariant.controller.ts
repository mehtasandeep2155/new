import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductVariantDto } from './dto/productvariant.dto';
import { ProductvariantService } from './productvariant.service';

@Controller('productvariant')
export class ProductvariantController {
  constructor(
    private productvariantService: ProductvariantService,
  ) {}

  @Get()
  async getVariants() {
    return this.productvariantService.get();
  }

  @Get(':id')
  async getVariantById(@Param('id') id: string) {
    return this.productvariantService.getById(id);
  }

  @Post()
  async createProductVariant(
    @Body() dto: ProductVariantDto,
  ) {
    return this.productvariantService.createProductVariant(
      dto,
    );
  }

  @Patch(':id')
  async updateProductVariant(
    @Param('id') id: string,
    @Body() dto: ProductVariantDto,
  ) {
    return this.productvariantService.updateProductVariant(
      id,
      dto,
    );
  }

  @Delete(':id')
  async deleteProductVariant(
    @Param('id') id: string,
  ) {
    return this.productvariantService.delete(id);
  }
}
