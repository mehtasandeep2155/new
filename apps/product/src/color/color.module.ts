import { Module } from '@nestjs/common';
import { ColorService } from './color.service';
import { ColorController } from './color.controller';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    ColorService,
    PrismaService,
    ConfigService,
  ],
  controllers: [ColorController],
})
export class ColorModule {}
