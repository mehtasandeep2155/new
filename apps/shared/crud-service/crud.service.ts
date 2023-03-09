import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CrudTypeMap } from './models/crudMapType';
import { Delegate } from './models/delegate';

@Injectable()
export abstract class CrudService<
  D extends Delegate,
  T extends CrudTypeMap,
> {
  constructor(protected delegate: D) {}
  //   commonServices
  public getDelegate(): D {
    return this.delegate;
  }

  public async get() {
    try {
      return await this.delegate.findMany();
    } catch (err) {
      throw err;
    }
  }

  public async getById(id: string) {
    try {
      const record =
        await this.delegate.findUnique({
          where: {
            id,
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

  public async create(data: T['create']) {
    try {
      return await this.delegate.create(data);
    } catch (err) {
      if ((err.code = 'P2002')) {
        throw new ForbiddenException(
          'Record already exists',
        );
      }
      throw err;
    }
  }

  public async update(id: string, data: any) {
    try {
      return await this.delegate.update({
        where: {
          id,
        },
        data,
      });
    } catch (err) {
      if (err.code === 'P2025') {
        throw new NotFoundException(
          'No record found!',
        );
      }
      throw err;
    }
  }

  public async delete(id: string) {
    try {
      return await this.delegate.delete({
        where: {
          id,
        },
      });
    } catch (err) {
      if (err.code === 'P2025') {
        throw new NotFoundException(
          'No record found!',
        );
      }
      throw err;
    }
  }
}
