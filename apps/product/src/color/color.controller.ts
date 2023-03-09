import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ColorService } from './color.service';
import { ColorDto } from './dto/color.dto';

@Controller('color')
export class ColorController {
  constructor(
    private readonly colorService: ColorService,
  ) {}

  @Get()
  async getColor() {
    return await this.colorService.get();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.colorService.getById(id);
  }

  @Post()
  async create(@Body() dto: ColorDto) {
    return await this.colorService.create({
      data: {
        color: dto.color,
      },
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: ColorDto,
  ) {
    return await this.colorService.updateColor(
      id,
      dto,
    );
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return this.colorService.delete(id);
  }
}
