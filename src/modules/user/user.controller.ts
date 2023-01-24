import { Body, Controller, Post, UnprocessableEntityException, ValidationPipe } from "@nestjs/common";
import { SETTINGS } from "src/app.utils";
import { userRegisterRequestDto } from "./dto/user-register.req.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{
constructor(private readonly userService: UserService){}

@Post('/register')
async doUserRegistration(@Body(SETTINGS.VALIDATION_PIPE) userRegister: userRegisterRequestDto){
    return await this.userService.doUserRegistration(userRegister)
}
}