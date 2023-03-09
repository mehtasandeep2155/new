import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { SubcompanyModule } from './subcompany/subcompany.module';

@Module({
  imports: [SubcompanyModule],
  controllers: [CompanyController],
  providers: [
    CompanyService,
    PrismaService,
    ConfigService,
  ],
})
export class CompanyModule {}
