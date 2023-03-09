import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CompanyService } from '../../company/src/company.service';
import { SubcompanyService } from '../../company/src/subcompany/subcompany.service';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { UserService } from '../../user/src/user.service';
import { ApiMainServiceController } from './api-main-service.controller';
import { ApiMainServiceService } from './api-main-service.service';

@Module({
  imports: [],
  controllers: [ApiMainServiceController],
  providers: [
    ApiMainServiceService,
    CompanyService,
    SubcompanyService,
    UserService,
    PrismaService,
    ConfigService,
  ],
})
export class ApiMainServiceModule {}
