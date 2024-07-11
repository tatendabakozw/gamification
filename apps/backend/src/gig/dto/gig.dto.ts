import { IsString } from 'class-validator';

export class GigDto {
  @IsString()
  id: number;

  @IsString()
  name: string;

  @IsString()
  price?: string;

  @IsString()
  desc?: string;

  @IsString()
  category?: string;

  @IsString()
  image?: string; // Optional profile picture field

  @IsString()
  createdAt?: any;

  @IsString()
  updatedAt?: any;
}
