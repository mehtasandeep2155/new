import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from '../../../shared/crud-service/crud.service';
import { RateTypeMap } from '../../../shared/crud-service/models/mapType';
import { prismaError } from '../../../shared/error-handling/error-functions';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { RateDto } from './dto/rate.dto';

@Injectable()
export class RateService extends CrudService<
  Prisma.RateDelegate<
    | Prisma.RejectOnNotFound
    | Prisma.RejectPerOperation
    | false
    | undefined
  >,
  RateTypeMap
> {
  constructor(
    private readonly prisma: PrismaService,
  ) {
    super(prisma.rate);
  }

  async getRate() {
    try {
      return await this.prisma.rate.findMany({
        include: {
          color: true,
          dimension: true,
          type: true,
          variant: true,
        },
      });
    } catch (err) {
      throw err;
    }
  }

  async getRateById(id: string) {
    try {
      const record =
        await this.prisma.rate.findUnique({
          where: {
            id,
          },
          include: {
            color: true,
            dimension: true,
            type: true,
            variant: true,
          },
        });

      if (!record)
        throw new NotFoundException(
          'No record found!',
        );
    } catch (err) {
      throw err;
    }
  }

  async createRate(dto: RateDto) {
    try {
      return await this.prisma.rate.create({
        data: {
          rate: dto.rate,
          color: {
            connect: {
              id: dto.colorId,
            },
          },
          type: {
            connect: {
              id: dto.typeId,
            },
          },
          dimension: {
            connect: {
              id: dto.dimensionId,
            },
          },
          variant: {
            connect: {
              id: dto.variantId,
            },
          },
        },
        include: {
          color: true,
          dimension: true,
          type: true,
          variant: true,
        },
      });
    } catch (err) {
      prismaError(err);
    }
  }

  async updateRate(id: string, dto: RateDto) {
    try {
      return await this.prisma.rate.update({
        where: {
          id,
        },
        data: {
          rate: dto.rate,
          color: {
            connect: {
              id: dto.colorId,
            },
          },
          type: {
            connect: {
              id: dto.typeId,
            },
          },
          dimension: {
            connect: {
              id: dto.dimensionId,
            },
          },
          variant: {
            connect: {
              id: dto.variantId,
            },
          },
        },
        include: {
          color: true,
          dimension: true,
          type: true,
          variant: true,
        },
      });
    } catch (err) {
      prismaError(err);
    }
  }
}
