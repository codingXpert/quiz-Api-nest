import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { events } from "src/common/constant/event.constants";
import { ResponseAddEvent } from "../event/response-add.event";
@Injectable()
export class ResponseService {
    
    @OnEvent(events.RESPONSE_SUBMITTED)
    checkQuizCompleted(payload :ResponseAddEvent) {
      console.log('checkQuizCompleted' , payload);
      
    }
}