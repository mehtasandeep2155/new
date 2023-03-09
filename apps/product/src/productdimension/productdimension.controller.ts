import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductDimensionDto } from './dto/product-dimension.dto';
import { ProductdimensionService } from './productdimension.service';

@Controller('productdimension')
export class ProductdimensionController {
  constructor(
    private productdimensionService: ProductdimensionService,
  ) {}

  @Get()
  async get() {
    return await this.productdimensionService.get();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.productdimensionService.getById(
      id,
    );
  }

  @Post()
  async createProductDimensions(
    @Body() dto: ProductDimensionDto,
  ) {
    return await this.productdimensionService.createDimensions(
      dto,
    );
  }

  @Patch(':id')
  async updateProductDimensions(
    @Param('id') id: string,
    @Body() dto: ProductDimensionDto,
  ) {
    return await this.productdimensionService.updateDimensions(
      id,
      dto,
    );
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return this.productdimensionService.delete(
      id,
    );
  }
}
