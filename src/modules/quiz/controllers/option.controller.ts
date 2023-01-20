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
    saveOptionToQuestion(@Body() createOption: OptionDto) {
        return createOption
    }
}