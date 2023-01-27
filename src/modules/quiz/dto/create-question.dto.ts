import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class QuestionDto {
  @ApiProperty({
    description: 'The actual question',
    example: 'A sample question',
  })
  @IsNotEmpty()
  @IsString()
  @Length(3, 255)
  question: string;

  
  @ApiProperty({
    description: 'The quiz id to which the question is associated.',
    example: 1,
  })
  @IsNotEmpty()
  quizId: number;
}
