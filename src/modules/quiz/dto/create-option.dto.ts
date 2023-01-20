import { IsNotEmpty, IsString, Length } from "class-validator";

export class OptionDto{

    @IsNotEmpty()
    @IsString()
    @Length(3 , 255)
    text: string;

    @IsNotEmpty()
    questionId: number;

    @IsNotEmpty()
    isCorrect: boolean;
}