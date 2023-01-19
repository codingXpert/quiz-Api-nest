import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from './controllers/quiz.controller';
import { Quiz } from 'src/modules/quiz/entity/quiz.entity';
import { QuizService } from './services/quiz.service';
import { QuestionController } from './controllers/question.controller';
import { QusetionService } from './services/question.service';
import { Question } from 'src/modules/quiz/entity/question.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Quiz, Question])],
    controllers: [QuizController, QuestionController],
    providers: [QuizService, QusetionService]
})
export class QuizModule { }
