import { ApiProperty } from '@nestjs/swagger';
import {
  NumberValidator,
  StringValidator,
} from '../../shared/common-dto/common.decorator';
import { IsNumber } from 'class-validator';

export class ProductDto {
  @NumberValidator()
  count: number;

  @StringValidator()
  rateId: string;

  @StringValidator()
  userId: string;

  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 10 })
  weight: number;

  @StringValidator()
  weightUom: string;
}
