import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { userRoles } from '../user/enum/user.enum';
import { UserService } from '../user/user.service';

@Injectable()
export class AdminRoleGuard implements CanActivate {
  constructor(private userService: UserService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    if (request?.body) {
      const { id } = request.body;
      const user = await this.userService.getUserById(id);
      const role = user.role === userRoles.ADMIN;
      if(role == true){
        return role;
      }
      throw new UnauthorizedException('You are not authorized to create the quiz');
    }
  }
}
