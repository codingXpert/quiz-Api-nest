import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from '../user/user.entity';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.generateToken(req.user);
  }

  // verify the token & get the current loged-in user
  @UseGuards(JwtAuthGuard)
  @Get('/user')
  async user(@Request() req): Promise<User> {
    return req.user
  }
}
