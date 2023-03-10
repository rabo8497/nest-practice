import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/home')
  @Render('home')
  getHomePage() {
      return 0
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
