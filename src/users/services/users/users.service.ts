import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { CreateUserType } from 'utils/types/types';
import { hash } from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(username: string, email: string, password: string): Promise<User> {
     const hashedPassword = await hash(password, 10);
    const user = this.userRepository.create({ username, email, password: hashedPassword });
    return this.userRepository.save(user);
  }

   async fetchUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  //for authentication
  async findByEmail(email: string):Promise<User | null> {
    return await this.userRepository.findOne({
      where: { email, },
    });
  }

}
