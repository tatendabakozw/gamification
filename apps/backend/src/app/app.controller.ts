import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getData() {
    return this.appService.getData();
  }

  @Post('')
  addProduct(@Body() dto: any) {
    return this.appService.addProduct(dto);
  }
}
