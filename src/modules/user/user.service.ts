import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async doUserRegistration(userRegister) {
    return userRegister;
  }
}
