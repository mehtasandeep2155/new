import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RateDto } from './dto/rate.dto';
import { RateService } from './rate.service';

@Controller('rate')
export class RateController {
  constructor(private rateService: RateService) {}

  @Get()
  async getRate() {
    return this.rateService.getRate();
  }

  @Get(':id')
  async getRateById(@Param('id') id: string) {
    return this.rateService.getRateById(id);
  }

  @Post()
  async createRate(@Body() dto: RateDto) {
    return this.rateService.createRate(dto);
  }

  @Patch(':id')
  async updateRate(
    @Param('id') id: string,
    @Body() dto: RateDto,
  ) {
    return this.rateService.updateRate(id, dto);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return this.rateService.delete(id);
  }
}
