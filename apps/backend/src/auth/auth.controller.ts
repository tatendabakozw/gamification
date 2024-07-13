import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { Request } from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';
import { AuthPayloadDto } from './dto';
import { GetUser } from '../helpers/getUser';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  login(@GetUser() user) {
    return { message: 'Login succesful', user };
  }

  @Post('register')
  async createUser(@Body() userData: AuthPayloadDto) {
    return this.authService.createUser(userData);
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
