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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { ApiPaginatedResponse } from 'src/common/decorator/api-pagination.response';
// import { ApiPaginatedResponse } ;
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { Quiz } from '../entity/quiz.entity';
import { QuizService } from '../services/quiz.service';
@ApiTags('Quiz')
@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get('/all')
  @ApiCreatedResponse({ description: 'The quiz that got created', type: () => Quiz })
  async GetAllQuiz():Promise<[Quiz[] , number]> {
    return await this.quizService.getAllQuiz();
   }

  @Post()
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  CreateQuiz(@Body() quizDto: CreateQuizDto) {
    return this.quizService.createNewQuiz(quizDto);
  }

  // @Get(':id')
  // async getQuizById(@Param('id') id: number) {
  //   return await this.quizService.getQuizById(+id);
  // }

  @Get('/:id')
  @ApiOkResponse({ description: 'Get a quiz by id', type: Quiz })
  async getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Quiz> {
    return await this.quizService.getQuizById(id);
  }

  //pagination
  @Get('/')
  @ApiPaginatedResponse({ model: Quiz, description: 'List of quizzes' })
  async getAllQuiz(
    @Query('page' , new DefaultValuePipe(1) , ParseIntPipe) page: number = 1,
    @Query('limit' , new DefaultValuePipe(10) , ParseIntPipe) limit: number = 1
  ): Promise<Pagination<Quiz>>{
    const options: IPaginationOptions = {
      limit,
      page
    };
    return await this.quizService.paginate(options)
  }

  //creating question
  @ApiCreatedResponse({ description: 'The quiz that got created', type: Quiz })
  @Post('/create')
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto): Promise<Quiz> {
    return await this.quizService.createNewQuiz(quizData);
  }
}
