import { Controller, Post } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ApiTags } from '@nestjs/swagger';
import { events } from 'src/common/constant/event.constants';
import { ResponseAddEvent } from '../event/response-add.event';

@ApiTags('Response')
@Controller()
export class ResponseController {
    constructor(private eventEmitter: EventEmitter2) {}
    
  @Post()
  async handleQuestionResponse() {
    const payload = new ResponseAddEvent;
    payload.userId = 1;
    payload.optionId = 4;
    this.eventEmitter.emit(events.RESPONSE_SUBMITTED , payload)
    return {message:'api-token'}
  }
}
