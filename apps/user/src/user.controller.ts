import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import {
  EventPattern,
  MessagePattern,
} from '@nestjs/microservices';
import { JwtGuard } from './auth/guard';
import { UserCreatedDto } from './dto/userCreated.dto';
import { RoleGuard } from '../../shared/roleGuard/role/role.guard';
import { Roles } from '../../shared/roleGuard/roles/roles.decorator';
import { Delete } from '@nestjs/common/decorators';
import { CompanyDto } from '../../company/dto/company.dto';
import { CompanyService } from '../../company/src/company.service';
import { SubCompanyDto } from '../../company/src/subcompany/dto/subcompany.dto';
import { SubcompanyService } from '../../company/src/subcompany/subcompany.service';

@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly companyService: CompanyService,
    private readonly subcompanyService: SubcompanyService,
  ) {}

  @Get()
  getHello() {
    return this.userService.get();
  }

  @Roles('Admin')
  @UseGuards(JwtGuard, RoleGuard)
  @Get('get_user')
  getUserApi() {
    return this.userService.getUser();
  }

  @Patch('handle_user')
  async handleUserCreatedApi(
    @Body() data: UserCreatedDto,
  ) {
    return await this.userService.handleUserCreated(
      data,
    );
  }

  @Get('company')
  async getCompanies() {
    return this.companyService.get();
  }

  @Get('company/:id')
  async getCompany(@Param('id') id: string) {
    return this.companyService.getById(id);
  }

  @Post('company')
  async createCompany(@Body() dto: CompanyDto) {
    return this.companyService.createCompany(dto);
  }

  @Patch('company/:id')
  async updateCompany(
    @Param('id') id: string,
    @Body() dto: CompanyDto,
  ) {
    return this.companyService.updateCompany(
      id,
      dto,
    );
  }

  @Delete('company/:id')
  async deleteCompany(@Param('id') id: string) {
    return this.companyService.delete(id);
  }

  @Get('subcompany')
  async getSubCompanies() {
    return this.subcompanyService.get();
  }

  @Get('subcompany/:id')
  async getSubCompany(@Param('id') id: string) {
    return this.subcompanyService.getById(id);
  }

  @Post('subcompany')
  async createSubCompany(
    @Body() dto: SubCompanyDto,
  ) {
    return this.subcompanyService.create({
      data: {
        ...dto,
      },
    });
  }

  @Patch('subcompany/:id')
  async updateSubCompany(
    @Param('id') id: string,
    @Body() dto: SubCompanyDto,
  ) {
    return this.subcompanyService.update(id, dto);
  }

  @Delete('subcompany/:id')
  async deleteSubCompany(
    @Param('id') id: string,
  ) {
    return this.subcompanyService.delete(id);
  }

  // microservices

  @EventPattern('user_created')
  handleUserCreated(data: UserCreatedDto) {
    this.userService.handleUserCreated(data);
  }

  @MessagePattern({ cmd: 'get_user' })
  getUser() {
    return this.userService.getUser();
  }
}
