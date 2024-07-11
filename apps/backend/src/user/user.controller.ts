import { Controller, Delete, Get, Param, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { LocalGuard } from '../auth/guards/local.guard';
import { Request } from 'express';
import { UserDto } from './dto/user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Delete('delete')
  // delete user
  async deleteSingleUser(@Req() req: Request) {
    const _user: any = req.user;
    return this.userService.deleteSingleUser(_user);
  }

  @Get('all')
  async getAllUsers() {
    return this.userService.getAllusers();
  }

  // get single user
  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.userService.getSingleUser(Number(id));
  }
}
