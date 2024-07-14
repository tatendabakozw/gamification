import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AuthPayloadDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsOptional()
  @IsString()
  role?: string;
}
