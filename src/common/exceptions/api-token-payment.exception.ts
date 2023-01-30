import { HttpException, HttpStatus } from "@nestjs/common";

export class ApiTokenPaymentException extends HttpException{
constructor(){
    super('Token Suggest Payment Is Required' , HttpStatus.PAYMENT_REQUIRED);
}
}