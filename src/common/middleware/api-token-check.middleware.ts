import { BadRequestException, HttpException, HttpStatus, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class ApiTokenCheckMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.headers['api-token'] !== 'my-token')    // In postman, run http://localhost:3000 & from header pass api-token: my-token'
      throw new HttpException(
        'My Exception',
        HttpStatus.PAYMENT_REQUIRED
      )
    next();
  }
}
