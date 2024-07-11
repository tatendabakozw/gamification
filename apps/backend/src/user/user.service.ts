import { PrismaService } from '@gamification/prisma-db';
import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // edit user info
  async editSingleUser() {
    // edit user login goes here
  }

  async deleteSingleUser(user: UserDto) {
    await this.prisma.user.delete({
      where: {
        email: user.email,
      },
    });
    return { message: 'User deleted Successfully!' };
  }

  // get all users
  async getAllusers() {
    return await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        profilePic: true,
        createdAt: true,
      },
    });
  }

  // get single user
  async getSingleUser(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    delete user.password;
    return user;
  }
}
