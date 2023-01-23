import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";

@Entity('options')
export class Option extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar'})
    text:string;

    @Column({type: 'boolean'})
    isCorrect: boolean;
    
    @ManyToOne(() => Question , (question) => question.options)
    question: Question

}
