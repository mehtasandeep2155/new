import { ModuleName } from '@prisma/client';
import { StringValidator } from '../../../shared/common-dto/common.decorator';

export class CreateModuleDto {
  @StringValidator()
  name: ModuleName;

  @StringValidator()
  userId: string;
}
