import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { MESSAGES, REGEX } from 'src/app.utils';

export class userRegisterRequestDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(3, 24)
  @Matches(REGEX.PASSWORD_RULE , {message: MESSAGES.PASSWORD_RULE_MESSAGE})
  password: string;

  @IsNotEmpty()
  @Length(3, 24)
  @Matches(REGEX.PASSWORD_RULE)
  confirm: string;
}
