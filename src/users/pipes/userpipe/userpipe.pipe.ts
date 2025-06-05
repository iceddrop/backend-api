import {
  ArgumentMetadata,
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/controllers/dtos/CreatedUsers.dto';

@Injectable()
export class UserpipePipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
 console.log(value)
    return value;
  }
}