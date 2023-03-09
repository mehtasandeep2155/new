import {
  NumberOptionalValidator,
  NumberValidator,
  StringValidator,
} from '../../../../shared/common-dto/common.decorator';

export class ProductVariantDto {
  @StringValidator()
  sectionName: string;

  @NumberValidator()
  sectionNumber: number;

  @NumberOptionalValidator()
  width: number;

  @NumberOptionalValidator()
  height: number;

  @NumberOptionalValidator()
  thickness: number;

  @NumberOptionalValidator()
  outerDiameter: number;

  @StringValidator()
  weight: string;
}
