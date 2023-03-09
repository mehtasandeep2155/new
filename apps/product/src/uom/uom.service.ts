import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from '../../../shared/crud-service/crud.service';
import { UomTypeMap } from '../../../shared/crud-service/models/mapType';
import { prismaError } from '../../../shared/error-handling/error-functions';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { UomDto } from './dto/uom.dto';

@Injectable()
export class UomService extends CrudService<
  Prisma.UomDelegate<
    | Prisma.RejectOnNotFound
    | Prisma.RejectPerOperation
    | false
    | undefined
  >,
  UomTypeMap
> {
  constructor(
    private readonly prisma: PrismaService,
  ) {
    super(prisma.uom);
  }

  async updateUom(id: string, data: UomDto) {
    try {
      return await this.prisma.uom.update({
        where: {
          id,
        },
        data,
      });
    } catch (err) {
      prismaError(err);
    }
  }
}
