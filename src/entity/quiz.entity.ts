import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}