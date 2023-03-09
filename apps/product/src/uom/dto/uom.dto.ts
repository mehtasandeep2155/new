import { StringValidator } from '../../../../shared/common-dto/common.decorator';

export class UomDto {
  @StringValidator()
  type: string;
}
