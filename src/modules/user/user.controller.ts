import {
  Body,
  Controller,
  Post,
  UnprocessableEntityException,
  ValidationPipe,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { SETTINGS } from 'src/app.utils';
import { userRegisterRequestDto } from './dto/user-register.req.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  @ApiCreatedResponse({description: 'Created user object as response' , type: User})  // used for swagger
  @ApiCreatedResponse({description: 'User can not register, Try again!'})
  async doUserRegistration(
    @Body(SETTINGS.VALIDATION_PIPE) userRegister: userRegisterRequestDto,
  ): Promise<User> {
    return await this.userService.doUserRegistration(userRegister);
  }
}
