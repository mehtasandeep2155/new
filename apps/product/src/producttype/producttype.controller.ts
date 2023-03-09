import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductTypeDto } from './dto/product-type.dto';
import { ProducttypeService } from './producttype.service';

@Controller('product-type')
export class ProducttypeController {
  constructor(
    private readonly producttypeService: ProducttypeService,
  ) {}

  @Get()
  async getColor() {
    return await this.producttypeService.get();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.producttypeService.getById(id);
  }

  @Post()
  async createProductType(
    @Body() dto: ProductTypeDto,
  ) {
    return await this.producttypeService.createProductType(
      dto,
    );
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: ProductTypeDto,
  ) {
    return await this.producttypeService.update(
      id,
      dto,
    );
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return this.producttypeService.delete(id);
  }
}
