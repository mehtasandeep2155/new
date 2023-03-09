import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from '../../shared/crud-service/crud.service';
import { ProductTypeMap } from '../../shared/crud-service/models/mapType';
import { prismaError } from '../../shared/error-handling/error-functions';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService extends CrudService<
  Prisma.ProductDelegate<
    | Prisma.RejectOnNotFound
    | Prisma.RejectPerOperation
    | false
    | undefined
  >,
  ProductTypeMap
> {
  constructor(
    private readonly prisma: PrismaService,
  ) {
    super(prisma.product);
  }

  async getProduct() {
    try {
      return await this.prisma.product.findMany({
        include: {
          user: true,
          rate: true,
          weightUom: true,
        },
      });
    } catch (err) {
      throw err;
    }
  }

  async getProductById(id: string) {
    try {
      const record =
        await this.prisma.product.findUnique({
          where: {
            id,
          },
          include: {
            rate: true,
            user: true,
            weightUom: true,
          },
        });

      if (!record)
        throw new NotFoundException(
          'No record found!',
        );

      return record;
    } catch (err) {
      throw err;
    }
  }

  async createProduct(dto: ProductDto) {
    try {
      return await this.prisma.product.create({
        data: {
          count: dto.count,
          weight: dto.weight,
          weightUom: {
            connect: {
              type: dto.weightUom,
            },
          },
          rate: {
            connect: {
              id: dto.rateId,
            },
          },
          user: {
            connect: {
              id: dto.userId,
            },
          },
        },
        include: {
          rate: true,
          user: true,
          weightUom: true,
        },
      });
    } catch (err) {
      prismaError(err);
    }
  }

  async updateProduct(
    id: string,
    dto: ProductDto,
  ) {
    try {
      const record =
        await this.prisma.product.update({
          where: {
            id,
          },
          data: {
            count: dto.count,
            weight: dto.weight,
            weightUom: {
              connect: {
                type: dto.weightUom,
              },
            },
            rate: {
              connect: {
                id: dto.rateId,
              },
            },
            user: {
              connect: {
                id: dto.userId,
              },
            },
          },
        });

      return record;
    } catch (err) {
      prismaError(err);
    }
  }
}
