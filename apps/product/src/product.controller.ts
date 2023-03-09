import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
  ) {}

  @Get()
  async getProducts() {
    return this.productService.getProduct();
  }

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }

  @Post()
  async createProduct(@Body() dto: ProductDto) {
    return this.productService.createProduct(dto);
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() dto: ProductDto,
  ) {
    return this.productService.updateProduct(
      id,
      dto,
    );
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
