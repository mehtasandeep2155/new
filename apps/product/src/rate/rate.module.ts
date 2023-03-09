import { Module } from '@nestjs/common';
import { RateService } from './rate.service';
import { RateController } from './rate.controller';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    RateService,
    PrismaService,
    ConfigService,
  ],
  controllers: [RateController],
})
export class RateModule {}
