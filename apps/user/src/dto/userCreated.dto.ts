import { ApiProperty } from '@nestjs/swagger';
import { ModuleName } from '@prisma/client';
import {
  StringOptionalValidator,
  StringValidator,
} from '../../../shared/common-dto/common.decorator';
import {
  ModuleTypeAccess,
  Role,
} from '../../../shared/entity/types';
import {
  IsArray,
  IsEmail,
  IsEnum,
  IsOptional,
} from 'class-validator';

class ControlsArray {
  @StringValidator()
  @IsEnum(ModuleName)
  name: ModuleName;

  @ApiProperty()
  @IsArray()
  controls: Array<ModuleTypeAccess>;
}

export class UserCreatedDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty({
    isArray: true,
    type: ControlsArray,
  })
  @IsArray()
  moduleAccess: ControlsArray[];

  @ApiProperty({ enum: Role })
  @IsOptional()
  @IsEnum(Role)
  role: Role;

  @StringOptionalValidator()
  companyName: string;
}
