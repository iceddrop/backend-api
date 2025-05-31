import {IsEmail, IsInt, IsNotEmpty} from 'class-validator'

export class CreateUserDto {
    
     id: number;

     @IsNotEmpty()
     username: string;

     @IsEmail()
     email: string;
}