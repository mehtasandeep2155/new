import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SubCompanyDto } from './dto/subcompany.dto';
import { SubcompanyService } from './subcompany.service';

@Controller('subcompany')
export class SubcompanyController {
  constructor(
    private subcompanyService: SubcompanyService,
  ) {}

  @Get()
  async getSubCompanies() {
    return this.subcompanyService.get();
  }

  @Get(':id')
  async getSubCompany(@Param('id') id: string) {
    return this.subcompanyService.getById(id);
  }

  @Post()
  async createSubCompany(
    @Body() dto: SubCompanyDto,
  ) {
    return this.subcompanyService.create({
      data: {
        ...dto,
      },
    });
  }

  @Patch(':id')
  async updateSubCompany(
    @Param('id') id: string,
    @Body() dto: SubCompanyDto,
  ) {
    return this.subcompanyService.update(id, dto);
  }

  @Delete(':id')
  async deleteSubCompany(
    @Param('id') id: string,
  ) {
    return this.subcompanyService.delete(id);
  }
}
