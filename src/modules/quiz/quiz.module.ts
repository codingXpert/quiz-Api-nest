import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from './controllers/quiz.controller';
import { Quiz } from 'src/modules/quiz/entity/quiz.entity';
import { QuizService } from './services/quiz.service';
import { QuestionController } from './controllers/question.controller';
import { QusetionService } from './services/question.service';
import { Question } from 'src/modules/quiz/entity/question.entity';
import { OptionController } from './controllers/option.controller';
import { Option } from './entity/option.entity';
import { OptionService } from './services/option.service';
import { UserModule } from '../user/user.module';
import { ResponseController } from './controllers/respponse.controller';
import { ResponseService } from './services/response.service';

@Module({
    imports: [TypeOrmModule.forFeature([Quiz, Question , Option]) , UserModule],
    controllers: [QuizController, QuestionController, OptionController , ResponseController],
    providers: [QuizService, QusetionService , OptionService , ResponseService]
})
export class QuizModule { }
