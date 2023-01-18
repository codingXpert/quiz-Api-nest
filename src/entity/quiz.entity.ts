import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";

@Entity('quizes')
export class Quiz extends BaseEntity{

    @PrimaryGeneratedColumn({
        comment:'the quiz unique identifier'
    })
    id:number;

    @Column()
    title:string;

    @Column()
    description: string;

    @Column({
        type:'boolean',
        default:1
    })
    is_active:Boolean

    @OneToMany(() => Question , (question) => question.quiz)
    questions: Question[]
}