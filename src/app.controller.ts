import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/hello1")
  sayHello1(): string {
    return "Hello everyone1";
  }

  @Post("/hello2")
  sayHello2(): string {
    return "Hello everyone2";
  }
}
