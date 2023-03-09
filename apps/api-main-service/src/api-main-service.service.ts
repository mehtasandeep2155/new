import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiMainServiceService {
  getAll(): object[] {
    return [
      { _id: 1, name: 'Art' },
      { _id: 2, name: 'Science' },
      { _id: 3, name: 'Math' },
    ];
  }
}
