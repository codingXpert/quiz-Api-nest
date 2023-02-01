import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserService } from '../user/user.service';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        private userService: UserService
    ) { }

    async canActivate(context: ExecutionContext) {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        console.log('roles', roles);
        const request = context.switchToHttp().getRequest();

        if (request?.body) {
            const { id } = request.body;
            const user = await this.userService.getUserById(id);
            const role = roles.includes(user.role);
            if (role) {
                return role;
            }
            throw new UnauthorizedException('You are not authorized to create the quiz');
        }
    }
}
