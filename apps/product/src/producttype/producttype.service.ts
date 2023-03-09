import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime';
import { CrudService } from '../../shared/crud-service/crud.service';
import { ProductCategoryTypeMap } from '../../shared/crud-service/models/mapType';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { ProductTypeDto } from './dto/product-type.dto';

@Injectable()
export class ProducttypeService extends CrudService<
  Prisma.Product_typeDelegate<
    | Prisma.RejectOnNotFound
    | Prisma.RejectPerOperation
    | false
    | undefined
  >,
  ProductCategoryTypeMap
> {
  constructor(
    private readonly prisma: PrismaService,
  ) {
    super(prisma.product_type);
  }

  async createProductType(dto: ProductTypeDto) {
    try {
      const record =
        await this.prisma.product_type.findFirst({
          where: {
            AND: [
              {
                type: dto.type,
                subtype: dto.subtype,
              },
            ],
          },
        });

      if (record)
        throw new ForbiddenException(
          'Same record already exists',
        );

      if (!record)
        return await this.prisma.product_type.create(
          {
            data: {
              type: dto.type,
              subtype: dto.subtype,
            },
          },
        );
    } catch (err) {
      throw err;
    }
  }
}
