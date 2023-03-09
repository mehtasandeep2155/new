import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from '../../../shared/crud-service/crud.service';
import { ProductVariantTypeMap } from '../../../shared/crud-service/models/mapType';
import { prismaError } from '../../../shared/error-handling/error-functions';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { ProductVariantDto } from './dto/productvariant.dto';

@Injectable()
export class ProductvariantService extends CrudService<
  Prisma.Product_variantDelegate<
    | Prisma.RejectOnNotFound
    | Prisma.RejectPerOperation
    | false
    | undefined
  >,
  ProductVariantTypeMap
> {
  constructor(
    private readonly prisma: PrismaService,
  ) {
    super(prisma.product_variant);
  }

  async createProductVariant(
    dto: ProductVariantDto,
  ) {
    try {
      return await this.prisma.product_variant.create(
        {
          data: {
            ...dto,
          },
        },
      );
    } catch (err) {
      prismaError(err);
    }
  }

  async updateProductVariant(
    id: string,
    dto: ProductVariantDto,
  ) {
    try {
      const record =
        await this.prisma.product_variant.update({
          where: {
            id,
          },
          data: {
            ...dto,
          },
        });

      if (!record) {
        throw new NotFoundException(
          'Record not found!',
        );
      }

      return record;
    } catch (err) {
      prismaError(err);
    }
  }
}
