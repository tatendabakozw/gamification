import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateUserGigDto {
  @IsInt()
  userId: number;

  @IsInt()
  @IsNotEmpty()
  gigId: number;
}
