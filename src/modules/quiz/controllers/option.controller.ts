import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { OptionDto } from "../dto/create-option.dto";
import { OptionService } from "../services/option.service";
import { QusetionService } from "../services/question.service";
import { Option } from "../entity/option.entity";
@ApiTags('Option')
@Controller('option')
export class OptionController {
    constructor(
        private readonly optionService: OptionService,
        private readonly questionService: QusetionService
    ) { }

    @Post()
    @ApiCreatedResponse({
        description: 'The option that got created',
        type: () => Option,
      })
    @UsePipes(ValidationPipe)
    async saveOptionToQuestion(@Body() createOption: OptionDto) {
        const question = await this.questionService.findQuestionById(createOption.questionId)
        if (question) {
            const option = await this.optionService.createOption(createOption, question)
            return { question, createOption, option }
        }
    }
}