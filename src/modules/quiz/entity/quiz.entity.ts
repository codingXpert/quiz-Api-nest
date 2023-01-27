import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Question } from './question.entity';

@Entity('quizes')
export class Quiz extends BaseEntity {
  @ApiProperty({ description: 'Primary key as Quiz ID', example: 1 })
  @PrimaryGeneratedColumn({
    comment: 'the quiz unique identifier',
  })
  id: number;

  @ApiProperty({
    description: 'Title of the quiz',
    example: 'Sample Laravel quiz',
  })
  @Column()
  title: string;

  @ApiProperty({
    description: 'Description of the quiz',
    example: 'Lorem ipsum',
  })
  @Column()
  description: string;

  @ApiProperty({
    description: 'Quiz active or inactive state',
    example: true,
  })
  @Column({
    type: 'boolean',
    default: 1,
  })
  is_active: Boolean;

  @ApiProperty({
    description: 'List of questions',
  })
  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[];
}
