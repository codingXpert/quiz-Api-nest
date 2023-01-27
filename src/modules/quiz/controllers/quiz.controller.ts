import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { Quiz } from '../entity/quiz.entity';
import { QuizService } from '../services/quiz.service';
@ApiTags('Quiz')
@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get('/')
  @ApiCreatedResponse({ description: 'The quiz that got created', type: () => Quiz })
  async getAllQuiz():Promise<[Quiz[] , number]> {
    return await this.quizService.getAllQuiz();
  }

  @Post()
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  CreateQuiz(@Body() quizDto: CreateQuizDto) {
    return this.quizService.createNewQuiz(quizDto);
  }

  @Get(':id')
  async getQuizById(@Param('id') id: number) {
    return await this.quizService.getQuizById(+id);
  }
}
