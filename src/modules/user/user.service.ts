import { Injectable } from '@nestjs/common';
import { userRegisterRequestDto } from './dto/user-register.req.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {

  async doUserRegistration(
    userRegister: userRegisterRequestDto,
  ): Promise<User> {
    const user = new User();
    user.name = userRegister.name;
    user.email = userRegister.email;
    user.password = userRegister.password;
    return await user.save();
  }

  async getUserByEmail(email: string):Promise<User | undefined>{
    return await User.findOne({where:{email}})
  }
}
