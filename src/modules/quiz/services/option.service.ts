import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Option } from '../entity/option.entity';

@Injectable()
export class OptionService {
  constructor(@InjectRepository(Option) private repo: Repository<Option>){}
}
