import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { ApiPaginatedResponse } from 'src/common/decorator/api-pagination.response';
import { RolesGuard } from 'src/modules/auth/dynamic-roles.guard';
import { Roles } from 'src/modules/auth/roles.decorator';
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { Quiz } from '../entity/quiz.entity';
import { QuizService } from '../services/quiz.service';
@ApiTags('Quiz')
@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get('/all')
  @ApiCreatedResponse({
    description: 'The quiz that got created',
    type: () => Quiz,
  })
  async GetAllQuiz(): Promise<[Quiz[], number]> {
    return await this.quizService.getAllQuiz();
  }

  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  @UseGuards(RolesGuard)
  @Roles('admin' , 'member')
  @ApiCreatedResponse({ description: 'The quiz that got created', type: Quiz })
  CreateQuiz(@Body() quizDto: CreateQuizDto) {
    return this.quizService.createNewQuiz(quizDto);
  }

  @Get('/:id')
  @ApiOkResponse({ description: 'Get a quiz by id', type: Quiz })
  async getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Quiz> {
    return await this.quizService.getQuizById(id);
  }

  //pagination
  @Get('/')
  @ApiPaginatedResponse({ model: Quiz, description: 'List of quizzes' })
  async getAllQuiz(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 1,
  ): Promise<Pagination<Quiz>> {
    const options: IPaginationOptions = {
      limit,
      page,
    };
    return await this.quizService.paginate(options);
  }
}
