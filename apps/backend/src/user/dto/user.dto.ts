import { IsEmail, IsOptional, isString, IsString } from 'class-validator';

export class UserDto {
  id?: string;
  name: string;
  email: string;
  username: string;
  proPic?: string;
  createdAt?: string;
  updatedAt?: string;
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @IsOptional()
  proPic?: string;

  // Add other fields as needed

  // Exclude password or other sensitive fields from being updated through this DTO
}
