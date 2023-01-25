import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUserCreds(
    email: string,
    password: string,
  ): Promise<User | undefined> {
    const user = await this.userService.getUserByEmail(email);
    console.log(user);
    
    if(!user) throw new BadRequestException;
    const isMatch = await bcrypt.compare(password , user.password)
    if(!isMatch) throw new UnauthorizedException;
    return user;
  }
}
