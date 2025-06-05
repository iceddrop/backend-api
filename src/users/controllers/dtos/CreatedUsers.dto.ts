import {IsEmail, IsInt, IsNotEmpty, IsNumber, IsString} from 'class-validator'

export class CreateUserDto {

     @IsNotEmpty()
     username: string;

     @IsEmail()
     email: string;

     @IsNotEmpty()
     @IsString()
     password:string;
}