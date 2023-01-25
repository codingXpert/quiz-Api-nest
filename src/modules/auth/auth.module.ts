import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UserModule , PassportModule , JwtModule.register({  //registering jwtModule
    secret:'dfujgwveuycefdy',         
    signOptions: {expiresIn:'1d'}
  })],
  controllers: [AuthController],
  providers: [AuthService , LocalStrategy]
})
export class AuthModule {}
