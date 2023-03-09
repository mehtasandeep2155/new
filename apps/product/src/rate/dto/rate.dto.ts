import { ApiProperty } from '@nestjs/swagger';
import { StringOptionalValidator } from '../../../../shared/common-dto/common.decorator';
import {
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class RateDto {
  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 10 })
  rate: number;

  @StringOptionalValidator()
  variantId: string;

  @StringOptionalValidator()
  colorId: string;

  @StringOptionalValidator()
  typeId: string;

  @StringOptionalValidator()
  dimensionId: string;
}
