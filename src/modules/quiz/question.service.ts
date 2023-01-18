import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Question } from "src/entity/question.entity";
import { Quiz } from "src/entity/quiz.entity";
import { Repository } from "typeorm";
import { QuestionDto } from "./dto/create-question.dto";

@Injectable()
export class QusetionService {
    constructor(@InjectRepository(Question) private repo: Repository<Question>) { }

    async createQuestion(
        question: QuestionDto,
        quiz: Quiz
    ): Promise<Question> {
        const newQuestion = await this.repo.save({
            question: question.question
        });
        quiz.questions = [...quiz.questions , newQuestion ];
        await quiz.save()
        return newQuestion;
    }
};

