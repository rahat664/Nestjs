import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body('name') name: string): string {
    return this.appService.getHello(name);
  }

  @Get()
  getNames() {
    return this.appService.getNames();
  }

  @Delete()
  deleteNames() {
    return this.appService.deleteNames();
  }
}
