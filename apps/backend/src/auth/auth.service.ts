import { ConflictException, Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '@gamification/prisma-db';
import { comparePasswords, hashPassword } from '../helpers/hashing';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private prisma: PrismaService) {}

  // login user function
  async validateUser(dto: AuthPayloadDto) {
    const userExists = await this.prisma.user.findFirst({
      where: { username: dto.username },
    });
    if (!userExists) throw new ConflictException('User does not exist');

    const pwdMatchs = await comparePasswords(userExists.password, dto.password);

    if (pwdMatchs) {
      // do login auth
      delete userExists.password;
      return this.jwtService.sign(userExists);
    }
  }

  // register user function
  async createUser(data: AuthPayloadDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { username: data.username },
    });

    if (existingUser) {
      throw new ConflictException('User already exists');
    }
    const hash = await hashPassword(data.password);

    const user = await this.prisma.user.create({
      data: {
        username: data.username,
        password: hash,
        email: data.email,
      },
    });

    delete user.password;

    return user;
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
