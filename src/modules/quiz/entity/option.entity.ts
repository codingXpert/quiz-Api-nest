import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('options')
export class Option{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar'})
    text:string;

    @Column({type: 'boolean'})
    isCorrect: boolean

}
