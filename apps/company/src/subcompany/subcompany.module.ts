import { Module } from '@nestjs/common';
import { SubcompanyService } from './subcompany.service';
import { SubcompanyController } from './subcompany.controller';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    SubcompanyService,
    PrismaService,
    ConfigService,
  ],
  controllers: [SubcompanyController],
})
export class SubcompanyModule {}
