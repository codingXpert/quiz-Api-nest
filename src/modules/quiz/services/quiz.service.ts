import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Quiz } from "src/modules/quiz/entity/quiz.entity";
import { Repository } from "typeorm";
import { CreateQuizDto } from "../dto/create-quiz.dto";


@Injectable()
export class QuizService {
  constructor(@InjectRepository(Quiz) private repo: Repository<Quiz>) { }
  getAll() {
    return [1, 2, 3]
  }

  async createNewQuiz(quizDto: CreateQuizDto) {
    return await this.repo.save(quizDto);
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.repo.findOne(
      {
        where: { id },
        relations: ['questions']
      })
  }
}