import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { compare } from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    console.log(user?.password, "1")
    console.log(password, "2")
    if (!user) throw new UnauthorizedException('User not found!');
    const isPasswordMatch = await compare(password, user?.password);
    if (isPasswordMatch === false)
      throw new UnauthorizedException('Invalid credentials!');
    return { id: user.id };
  }
}
