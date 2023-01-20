import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OptionDto } from '../dto/create-option.dto';
import { Option } from '../entity/option.entity';
import { Question } from '../entity/question.entity';

@Injectable()
export class OptionService {
  constructor(@InjectRepository(Option) private repo: Repository<Option>) { }

  async createOption(option: OptionDto, question: Question) {

    const newOption = await this.repo.save({
      text: option.text,
      isCorrect: option.isCorrect
    });

    question.options = [newOption, ...question.options];
    console.log(question.options);

    await this.repo.save({ question });
    return newOption;
  }
}
