import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from '../dtos/CreatedUsers.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { UserpipePipe } from 'src/users/pipes/userpipe/userpipe.pipe';
import { UserGuard } from 'src/users/guards/user/user.guard';
@Controller('users')
export class UsersController {
constructor(private userService: UsersService) {}

  @Get()
  @UseGuards(UserGuard)
  getUsers() {
    return this.userService.fetchUsers();
  }

  @Post('create')
  @UsePipes(UserpipePipe, new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    return this.userService.createUser( userData.username,userData.email, userData.password)
  }

  @Get('categories')
  sortByCategories(@Query('sortBy') sortBy: string) {
    console.log(sortBy);
    return [{ username: 'tom', email: 'tom@gmail.com' }];
  }

  // @Get(':id')
  // getUserById(@Param('id', ParseIntPipe) id: number) {
  //   const user = this.userService.fetchUserById(id)

  //   if(!user){
  //       throw new HttpException('User not found o', HttpStatus.BAD_REQUEST);
  //       return user;
  //   }
  // }
}
