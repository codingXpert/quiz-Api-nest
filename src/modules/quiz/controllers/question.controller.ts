import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { QusetionService } from "../services/question.service";
import { QuestionDto } from "../dto/create-question.dto";
import { Question } from "src/modules/quiz/entity/question.entity";
import { QuizService } from "../services/quiz.service";
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
@ApiTags('Question')
@Controller('question')
export class QuestionController {
    constructor(
        private readonly questionService: QusetionService,
        private readonly quizService: QuizService
    ) { }

    @Post()
    @ApiCreatedResponse({
        description: 'Question added to a quiz',type: Question})  // solves the error of circular dependency by adding "type Question" on both side i.e, controller & entity
    @UsePipes(ValidationPipe)
    async saveQuestion(@Body() question: QuestionDto): Promise<Question> {
        const quiz = await this.quizService.getQuizById(question.quizId)
        return await this.questionService.createQuestion(question, quiz);
    }
}