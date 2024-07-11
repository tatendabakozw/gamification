import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

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
