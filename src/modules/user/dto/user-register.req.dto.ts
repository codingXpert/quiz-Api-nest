import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { MESSAGES, REGEX } from 'src/app.utils';
import { userRoles } from '../enum/user.enum';

export class userRegisterRequestDto {
  @ApiProperty({
    description: 'The name of the user',
    example: 'Vivek Raj',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The Email of the user',
    example: 'Vivek@g.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'Vivek@543213',
  })
  @IsNotEmpty()
  @Length(3, 24)
  @Matches(REGEX.PASSWORD_RULE, { message: MESSAGES.PASSWORD_RULE_MESSAGE })
  password: string;


  @ApiProperty({
    description: 'The role of the user',
    example: 'admin | member',
  })
  @IsNotEmpty()
  role: userRoles;

  @ApiProperty({
    description: 'The password of the user',
    example: 'Vivek@543213',
  })
  @IsNotEmpty()
  @Length(3, 24)
  @Matches(REGEX.PASSWORD_RULE, { message: MESSAGES.PASSWORD_RULE_MESSAGE })
  confirm: string;
}
