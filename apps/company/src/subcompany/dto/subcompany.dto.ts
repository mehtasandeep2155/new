import { StringValidator } from '../../../../shared/common-dto/common.decorator';

export class SubCompanyDto {
  @StringValidator()
  name: string;
}
