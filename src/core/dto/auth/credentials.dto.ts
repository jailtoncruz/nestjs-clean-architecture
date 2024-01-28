import { IsEmail, IsNotEmpty } from "class-validator";

export abstract class Credentals {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
