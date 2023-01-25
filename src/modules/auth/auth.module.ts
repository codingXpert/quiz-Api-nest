import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [UserModule , PassportModule],
  controllers: [AuthController],
  providers: [AuthService , LocalStrategy]
})
export class AuthModule {}
