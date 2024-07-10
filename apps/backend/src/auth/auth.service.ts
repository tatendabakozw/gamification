import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '@gamification/prisma-db';
import { Prisma } from '@prisma/client';
import { isValidEmail } from '../helpers/validators';

const fakeUser = [
  { id: 1, username: 'tatendaZw', password: 'password' },
  { id: 1, username: 'tatendaZw1', password: 'password123' },
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private prisma: PrismaService) {}

  async validateUser({ username, password, email }: AuthPayloadDto) {
    const userExists = await this.prisma.user.findFirst({
      where: { email: email },
    });
    if (!userExists) throw new ConflictException('User does not exist');
    if (password === userExists.password) {
      // do login auth
      const { password, ...user } = userExists;
      return this.jwtService.sign(user);
    }
  }

  async createUser(data: Prisma.UserCreateInput) {
    if (!isValidEmail(data.email)) {
      throw new BadRequestException('Invalid email format');
    }

    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    return this.prisma.user.create({
      data,
    });
  }

  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  async getUserById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }
}
