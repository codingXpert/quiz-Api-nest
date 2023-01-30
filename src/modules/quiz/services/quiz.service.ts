import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Quiz } from "src/modules/quiz/entity/quiz.entity";
import { Repository } from "typeorm";
import { CreateQuizDto } from "../dto/create-quiz.dto";
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';


@Injectable()
export class QuizService {
  constructor(@InjectRepository(Quiz) private repo: Repository<Quiz>) { }
 async getAllQuiz():Promise<[Quiz[] , number]> {
    return await this.repo
    .createQueryBuilder('q')  // here 'q' is alias(a temporary name for a table) for table quizes
    .leftJoinAndSelect('q.questions' , 'qt')  // joined quizes & questions // 'qt' is alias for table questions
    .leftJoinAndSelect('qt.options' , 'o')   // joined questions & options //   'o' is alias for table options
    // .take(1)                                 // pagination concept , show only one data at a time
    .getManyAndCount();                        // counts the total no of questions related to a quiz
  }

  async createNewQuiz(quizDto: CreateQuizDto) {
    return await this.repo.save(quizDto);
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.repo.findOne(
      {
        where: { id },
        relations: ['questions' , 'questions.options']
      })
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<Quiz>>{
    const qb = this.repo.createQueryBuilder('q');
    qb.orderBy('q.id' , 'ASC');
    return paginate<Quiz>(qb , options);
  }
}