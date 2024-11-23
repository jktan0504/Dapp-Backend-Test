import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  username;

  @IsEmail()
  @IsNotEmpty()
  email;

  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  password;
}