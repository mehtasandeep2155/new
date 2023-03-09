import { ApiProperty } from '@nestjs/swagger';
import { StringValidator } from '../../../../shared/common-dto/common.decorator';
import { IsNumber } from 'class-validator';

export class ProductDimensionDto {
  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 10 })
  height: number;

  @StringValidator()
  uom: string;
}
