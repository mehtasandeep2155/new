import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from '../../shared/crud-service/crud.service';
import { ColorTypeMap } from '../../shared/crud-service/models/mapType';
import { UserCreatedDto } from './dto/userCreated.dto';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { prismaError } from '../../shared/error-handling/error-functions';

@Injectable()
export class UserService extends CrudService<
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

  getHello(): string {
    return 'Hello World!';
  }

  async handleUserCreated(data: UserCreatedDto) {
    try {
      const user =
        await this.prisma.user.findUnique({
          where: {
            email: data.email,
          },
        });

      if (data.role)
        await this.prisma.user.update({
          where: {
            email: data.email,
          },
          data: {
            role: data.role,
          },
        });

      if (data.companyName)
        await this.prisma.user.update({
          where: {
            email: data.email,
          },
          data: {
            company: {
              connect: {
                name: data.companyName,
              },
            },
          },
        });

      const moduleData =
        await this.prisma.module.findMany({
          where: { userId: user.id },
        });

      for (const {
        name,
        controls,
      } of data?.moduleAccess) {
        moduleData.some(
          (item2) => item2.name === name,
        )
          ? await this.prisma.module.updateMany({
              where: {
                userId: user.id,
                name,
              },
              data: {
                name,
                controls,
                userId: user.id,
              },
            })
          : await this.prisma.module.createMany({
              data: {
                name,
                controls,
                userId: user.id,
              },
            });
      }

      const updatedUser =
        await this.prisma.user.findUnique({
          where: {
            email: data.email,
          },
          include: {
            modules: true,
            company: {
              include: {
                sub_company: true,
              },
            },
          },
        });
      return updatedUser;
    } catch (err) {
      prismaError(err);
    }
  }

  async getUser() {
    try {
      return await this.prisma.user.findMany();
    } catch (err) {
      throw err;
    }
  }
}
