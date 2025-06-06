import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthJwtPayload } from './types/jwt-Payload';
@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (!user) throw new UnauthorizedException('User not found!');
    const isPasswordMatch = await compare(password, user?.password);
    if (isPasswordMatch === false)
      throw new UnauthorizedException('Invalid credentials!');
    return { id: user.id };
  }

  login(userId: number){
    const payload: AuthJwtPayload = { sub: userId };
     return this.jwtService.sign(payload)
  }
}
