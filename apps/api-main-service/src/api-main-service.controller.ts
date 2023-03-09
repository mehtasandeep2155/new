import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CompanyDto } from '../../company/dto/company.dto';
import { CompanyService } from '../../company/src/company.service';
import { Roles } from '../../shared/roleGuard/roles/roles.decorator';
import { UserCreatedDto } from '../../user/src/dto/userCreated.dto';
import { UserService } from '../../user/src/user.service';
import { ApiMainServiceService } from './api-main-service.service';

@Controller('api')
export class ApiMainServiceController {
  constructor(
    private readonly companyService: CompanyService,
    private readonly apiMainServiceService: ApiMainServiceService,
    private readonly userService: UserService,
  ) {}

  @Get()
  getHello(): object[] {
    return this.apiMainServiceService.getAll();
  }

  @Get()
  getHelloUser() {
    return this.userService.get();
  }

  @Roles('Admin')
  // @UseGuards(JwtGuard, RoleGuard)
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
}
