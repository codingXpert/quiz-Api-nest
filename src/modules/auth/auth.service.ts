import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUserCreds(
    email: string,
    password: string,
  ): Promise<User | undefined> {
    const user = await this.userService.getUserByEmail(email);
    
    if (!user) throw new BadRequestException();
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException();
    return user;
  }

  async generateToken(user) {
    const payload = {
      name:  user.name,
      sub: user.id,
    }
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
