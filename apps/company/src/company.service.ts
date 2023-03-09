import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from '../../shared/crud-service/crud.service';
import { CompanyTypeMap } from '../../shared/crud-service/models/mapType';
import { prismaError } from '../../shared/error-handling/error-functions';
import { CompanyCreatedEvent } from '../../shared/events/company.event';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { CompanyDto } from '../dto/company.dto';

@Injectable()
export class CompanyService extends CrudService<
  Prisma.CompanyDelegate<
    | Prisma.RejectOnNotFound
    | Prisma.RejectPerOperation
    | false
    | undefined
  >,
  CompanyTypeMap
> {
  constructor(
    private readonly prisma: PrismaService,
  ) {
    super(prisma.company);
  }
  private readonly company: any[] = [];
  getHello(): string {
    return 'Hello World!';
  }

  handleCompanyCreated(
    data: CompanyCreatedEvent,
  ) {
    console.log(
      'company creation handling',
      data,
    );
    this.company.push({
      email: data.email,
      timestamp: Date.now(),
    });
  }

  async createCompany(dto: CompanyDto) {
    try {
      return await this.prisma.company.create({
        data: {
          name: dto.name,
          sub_company: {
            connect: dto.subCompanyId.map(
              (item) => {
                return {
                  id: item,
                };
              },
            ),
          },
        },
        include: {
          sub_company: true,
        },
      });
    } catch (err) {
      prismaError(err);
    }
  }
  async updateCompany(
    id: string,
    dto: CompanyDto,
  ) {
    try {
      const company =
        await this.prisma.company.findUnique({
          where: {
            id,
          },
          select: {
            sub_company: {
              select: {
                id: true,
              },
            },
          },
        });

      let disconnected = [];

      for (const { id } of company.sub_company) {
        if (!dto.subCompanyId.includes(id))
          disconnected.push(id);
      }

      if (disconnected && disconnected.length > 0)
        await this.prisma.company.update({
          where: { id },
          data: {
            name: dto.name,
            sub_company: {
              disconnect: disconnected.map(
                (item) => {
                  return {
                    id: item,
                  };
                },
              ),
            },
          },
        });

      if (
        dto.subCompanyId &&
        dto.subCompanyId.length > 0
      )
        await this.prisma.company.update({
          where: { id },
          data: {
            name: dto.name,
            sub_company: {
              connect: dto.subCompanyId.map(
                (item) => {
                  return {
                    id: item,
                  };
                },
              ),
            },
          },
        });

      const result =
        await this.prisma.company.findUnique({
          where: {
            id,
          },
          include: {
            sub_company: true,
          },
        });

      return result;
    } catch (err) {
      prismaError(err);
    }
  }
}
