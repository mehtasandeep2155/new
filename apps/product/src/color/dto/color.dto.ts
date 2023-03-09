import { StringValidator } from '../../../../shared/common-dto/common.decorator';

export class ColorDto {
  @StringValidator()
  color: string;
}
