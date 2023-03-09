import { ApiProperty } from '@nestjs/swagger';
import {
  NumberOptionalValidator,
  NumberValidator,
  StringValidator,
} from '../../../../shared/common-dto/common.decorator';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';

export class PurchaseOrderDto {
  @ApiProperty()
  @IsArray()
  product: Array<string>;

  @NumberValidator()
  challan_number: number;

  @NumberValidator()
  order_number: number;

  @StringValidator()
  customer_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  has_raw_material: boolean;

  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 10 })
  @IsNotEmpty()
  cost_per_kg: number;

  @NumberOptionalValidator()
  coating_discount: number;

  @NumberOptionalValidator()
  tax: number;
}
