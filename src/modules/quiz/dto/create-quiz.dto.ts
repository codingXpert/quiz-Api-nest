import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateQuizDto{

    @IsNotEmpty({message:'The quiz should have a title'})
    @Length(3 , 255)
    @IsString()
    title:string

    @IsNotEmpty({message:'The quiz should have a description'})
    @Length(3)
    @IsString()
    description:string

}