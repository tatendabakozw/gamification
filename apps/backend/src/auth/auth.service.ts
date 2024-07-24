import {
  ConflictException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '@gamification/prisma-db';
import { comparePasswords, hashPassword } from '../helpers/hashing';
import { EmailService } from '../email/email.service';
import { generateVerificationCode } from '../helpers/generateVerificationCode';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
    private emailService: EmailService
  ) {}

  // login user function
  async validateUser(dto: AuthPayloadDto) {
    const userExists = await this.prisma.user.findFirst({
      where: {
        OR: [{ username: dto.username }],
      },
    });
    if (!userExists) throw new ConflictException('User does not exist');

    if (!userExists.isVerified) {
      throw new ForbiddenException('Account not verified');
    }

    const pwdMatchs = await comparePasswords(userExists.password, dto.password);

    if (!pwdMatchs) {
      throw new ForbiddenException('Wrong login details');
    }

    if (pwdMatchs) {
      // do login auth
      delete userExists.password;
      return this.jwtService.sign(userExists);
    }
  }

  async generateJwtToken(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return this.jwtService.sign(payload);
  }

  // register user function
  async createUser(data: AuthPayloadDto) {
    try {
      const existingUser = await this.prisma.user.findFirst({
        where: {
          OR: [{ username: data.username }, { email: data.email }],
        },
      });

      if (existingUser) {
        throw new ConflictException('User already exists');
      }

      const hash = await hashPassword(data.password);
      const verCode = generateVerificationCode();

      const user = await this.prisma.user.create({
        data: {
          username: data.username,
          password: hash,
          email: data.email,
          role: 'USER',
          verCode,
        },
      });

      // Send verification email
      await this.emailService.sendVerificationEmail(user.email, verCode);

      delete user.password;
      delete user.verCode;

      return { message: 'Successfully Registered', user };
    } catch (error) {
      // Handle specific errors or re-throw for generic handling
      throw new InternalServerErrorException(
        'Failed to create user',
        error.message
      );
    }
  }

  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  async getUserById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  verifyUserCode = async (code: string, id: number) => {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id },
      });

      if (!user) {
        throw new ConflictException('User does not exist');
      }

      if (user.verCode !== code) {
        throw new ConflictException('Verification code does not match');
      }

      // Update user and await the operation
      await this.prisma.user.update({
        where: { id: id },
        data: { isVerified: true }, // Only update isVerified field
      });

      return { message: 'User verified successfully' };
    } catch (error) {
      // Handle specific errors or log them
      console.error('Error verifying user:', error);
      throw error; // Re-throw the error to be handled by the caller
    }
  };
}
