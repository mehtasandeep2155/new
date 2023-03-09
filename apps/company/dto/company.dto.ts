import { ApiProperty } from '@nestjs/swagger';
import { StringValidator } from '../../shared/common-dto/common.decorator';
import { IsArray } from 'class-validator';

export class CompanyDto {
  @StringValidator()
  name: string;

  @ApiProperty()
  @IsArray()
  subCompanyId: Array<string>;
}
