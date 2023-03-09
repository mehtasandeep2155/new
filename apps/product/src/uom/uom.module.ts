import { Module } from '@nestjs/common';
import { UomService } from './uom.service';
import { UomController } from './uom.controller';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    UomService,
    PrismaService,
    ConfigService,
  ],
  controllers: [UomController],
})
export class UomModule {}
