import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { UpdateUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // delete all users
  // GET reqest
  // /api/user/all
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async editSingleUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.userService.editSingleUser(id, updateUserDto);
  }

  // delete user
  // DELETE reqest
  // /api/user/delte
  @UseGuards(JwtAuthGuard)
  @Delete('delete')
  async deleteSingleUser(@Req() req: Request) {
    const _user: any = req.user;
    return this.userService.deleteSingleUser(_user);
  }

  // delete all users
  // GET reqest
  // /api/user/all
  @Get('all')
  async getAllUsers() {
    return this.userService.getAllusers();
  }

  // get single user
  // GET reqest
  // /api/user/:id
  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.userService.getSingleUser(Number(id));
  }
}
