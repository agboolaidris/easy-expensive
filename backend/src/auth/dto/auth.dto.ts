import { IsEmail, IsString, MinLength } from 'class-validator';

export class SignUpAuthDto {
  @IsString()
  @MinLength(2)
  fullName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class SignInAuthDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
