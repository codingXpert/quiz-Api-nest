import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from './quiz.controller';
import { Quiz } from 'src/entity/quiz.entity';
import { QuizService } from './quiz.service';
import { QuestionController } from './question.controller';
import { QusetionService } from './question.service';
import { Question } from 'src/entity/question.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Quiz , Question])],
    controllers:[QuizController , QuestionController],
    providers:[QuizService , QusetionService]
})
export class QuizModule {}
