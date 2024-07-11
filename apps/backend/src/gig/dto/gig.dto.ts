import { IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateGigDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  price?: string;

  @IsString()
  desc: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsString()
  @IsOptional()
  image?: string;

  @IsDateString()
  @IsOptional()
  createdAt?: Date;

  @IsDateString()
  @IsOptional()
  updatedAt?: Date;
}
