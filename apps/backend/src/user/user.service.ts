import { PrismaService } from '@gamification/prisma-db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // edit user info
  async editSingleUser() {
    // edit user login goes here
  }

  // delete user
  async deleteSingleUser() {
    // delete user login goes here
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
    }); // delete user login goes here
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
