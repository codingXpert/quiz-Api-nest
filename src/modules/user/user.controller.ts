import { Body, Controller, Post, UnprocessableEntityException, ValidationPipe } from "@nestjs/common";
import { userRegisterRequestDto } from "./dto/user-register.req.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{
constructor(private readonly userService: UserService){}

@Post('/register')
async doUserRegistration(@Body(ValidationPipe) userRegister: userRegisterRequestDto){
    return await this.userService.doUserRegistration(userRegister)
}
}