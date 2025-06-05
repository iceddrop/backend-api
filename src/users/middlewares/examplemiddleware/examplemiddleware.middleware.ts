import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { error } from 'console';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExamplemiddlewareMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const {authorization} = req.headers;
    if (!authorization){
       throw new HttpException (
        "Unauthorized" , HttpStatus.FORBIDDEN
       )
    } 
    
    if (authorization === "forbiddenlandofbad") {
    }
    next();

     if (authorization !== "forbiddenlandofbad") {
       throw new HttpException (
        "Wrong token provided" , HttpStatus.FORBIDDEN
       )
    }
  }
}
