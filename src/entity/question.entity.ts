import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Quiz } from "./quiz.entity";

@Entity('questions')
export class Question{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar'})
    question:string;

    @ManyToOne(() => Quiz , (quiz) => quiz.questions)
    quiz:Quiz
}
