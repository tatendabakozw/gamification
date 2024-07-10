import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { Request } from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';
import { Prisma } from '@prisma/client';
import { AuthPayloadDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  login(@Req() req: Request) {
    return req.user;
  }

  @Post('register')
  async createUser(@Body() userData: AuthPayloadDto) {
    return this.authService.createUser(userData);
  }

  @Get(':id')
  async getUser(@Param('id') id: number) {
    return this.authService.getUserById(id);
  }

  @Get('all')
  async getAllUsers() {
    return this.authService.getAllUsers();
  }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  status(@Req() req: Request) {
    console.log(req.user);
    return req.user;
  }
}
