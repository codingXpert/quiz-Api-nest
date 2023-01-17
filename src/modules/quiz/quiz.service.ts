import { Injectable } from "@nestjs/common";
import { CreateQuizDto } from "./dto/create-quiz.dto";

@Injectable()
export class QuizService{
  getAll(){
    return [1,2,3]
  }
  
  create(quizDto: CreateQuizDto){
     return quizDto;
  }

}