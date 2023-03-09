import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UomDto } from './dto/uom.dto';
import { UomService } from './uom.service';

@Controller('uom')
export class UomController {
  constructor(
    private readonly uomService: UomService,
  ) {}

  @Get()
  async getColor() {
    return await this.uomService.get();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.uomService.getById(id);
  }

  @Post()
  async create(@Body() dto: UomDto) {
    return await this.uomService.create({
      data: {
        type: dto.type,
      },
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UomDto,
  ) {
    return await this.uomService.updateUom(
      id,
      dto,
    );
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return this.uomService.delete(id);
  }
}
