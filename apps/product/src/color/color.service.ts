import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from '../../shared/crud-service/crud.service';
import { ColorTypeMap } from '../../shared/crud-service/models/mapType';
import { prismaError } from '../../shared/error-handling/error-functions';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { ColorDto } from './dto/color.dto';

@Injectable()
export class ColorService extends CrudService<
  Prisma.ColorDelegate<
    | Prisma.RejectOnNotFound
    | Prisma.RejectPerOperation
    | false
    | undefined
  >,
  ColorTypeMap
> {
  constructor(
    private readonly prisma: PrismaService,
  ) {
    super(prisma.color);
  }

  async updateColor(id: string, data: ColorDto) {
    try {
      return await this.prisma.color.update({
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
