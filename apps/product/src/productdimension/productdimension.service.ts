import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from '../../../shared/crud-service/crud.service';
import { ProductDimensionTypeMap } from '../../../shared/crud-service/models/mapType';
import { prismaError } from '../../../shared/error-handling/error-functions';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { ProductDimensionDto } from './dto/product-dimension.dto';

@Injectable()
export class ProductdimensionService extends CrudService<
  Prisma.Product_dimensionDelegate<
    | Prisma.RejectOnNotFound
    | Prisma.RejectPerOperation
    | false
    | undefined
  >,
  ProductDimensionTypeMap
> {
  constructor(
    private readonly prisma: PrismaService,
  ) {
    super(prisma.product_dimension);
  }

  async createDimensions(
    dto: ProductDimensionDto,
  ) {
    try {
      const record =
        await this.prisma.product_dimension.create(
          {
            data: {
              height: dto.height,
              uom: {
                connect: {
                  type: dto.uom,
                },
              },
            },
          },
        );

      return record;
    } catch (err) {
      prismaError(err);
    }
  }

  async updateDimensions(
    id: string,
    dto: ProductDimensionDto,
  ) {
    try {
      return await this.prisma.product_dimension.update(
        {
          where: {
            id,
          },
          data: {
            height: dto.height,
            uom: {
              connect: {
                type: dto.uom,
              },
            },
          },
        },
      );
    } catch (err) {
      throw err;
    }
  }
}
