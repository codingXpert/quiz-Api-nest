import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateQuizDto {
  @ApiProperty({
    description: 'The title of the quiz',
    example: 'How good are your with Laravel?',
  })
  @IsNotEmpty({ message: 'The quiz should have a title' })
  @Length(3, 255)
  @IsString()
  title: string;

  @ApiProperty({
    description: 'A small description for the user',
    example:
      'This quiz will ask your questions on Laravel and test your knowledge.',
  })
  @IsNotEmpty({ message: 'The quiz should have a description' })
  @Length(3)
  @IsString()
  description: string;
}
