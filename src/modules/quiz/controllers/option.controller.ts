import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { OptionDto } from "../dto/create-option.dto";
import { OptionService } from "../services/option.service";
import { QusetionService } from "../services/question.service";

@Controller('option')
export class OptionController {
    constructor(
        private readonly optionService: OptionService,
        private readonly questionService: QusetionService
    ) { }

    @Post()
    @UsePipes(ValidationPipe)
    async saveOptionToQuestion(@Body() createOption: OptionDto) {
        const question = await this.questionService.findQuestionById(createOption.questionId)
        if (question) {
            const option = await this.optionService.createOption(createOption, question)
            return { question, createOption, option }
        }
    }
}