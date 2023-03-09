import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from '../../../shared/crud-service/crud.service';
import { SubCompanyTypeMap } from '../../../shared/crud-service/models/mapType';
import { PrismaService } from '../../../shared/prisma/prisma.service';

@Injectable()
export class SubcompanyService extends CrudService<
  Prisma.Sub_companyDelegate<
    | Prisma.RejectOnNotFound
    | Prisma.RejectPerOperation
    | false
    | undefined
  >,
  SubCompanyTypeMap
> {
  constructor(
    private readonly prisma: PrismaService,
  ) {
    super(prisma.sub_company);
  }
}
