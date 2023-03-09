import { Module } from '@nestjs/common';
import { SubcompanyService } from './subcompany.service';
import { SubcompanyController } from './subcompany.controller';
import { PrismaService } from '../../shared/prisma/prisma.service';

@Module({
  providers: [SubcompanyService, PrismaService],
  controllers: [SubcompanyController],
})
export class SubcompanyModule {}
