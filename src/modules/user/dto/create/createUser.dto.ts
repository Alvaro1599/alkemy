import { IsEmail, IsEmpty, IsString, MinLength } from "class-validator";
import { ValidatorDto } from "../../../../utils/validator/base";
import { createUserDtoI } from "../../interface";
class createUserDto {
  @IsString()
  @IsEmpty()
  @MinLength(3)
  name!: string;
  @IsString()
  @IsEmpty()
  @MinLength(3)

  lastName!: string;
  @IsEmpty()
  @IsEmail()
  email!: string;
  @IsString()
  @IsEmpty()
  @MinLength(3)
  password!: string;
  constructor({ email, lastName, name, password }: createUserDtoI) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}

export default createUserDto;
