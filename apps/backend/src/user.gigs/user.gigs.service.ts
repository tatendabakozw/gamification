import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@gamification/prisma-db';
import { CreateUserGigDto } from './dto/create-user.gig.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserGigsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserGigDto) {
    const intUser = parseInt(data.userId.toString());

    const gig = await this.prisma.gig.findUnique({
      where: { id: data.gigId },
    });

    if (!gig) {
      throw new NotFoundException(`Gig with ID ${data.gigId} not found`);
    }

    return this.prisma.userGig.create({
      data: {
        userId: intUser,
        gigId: data.gigId,
      },
    });
  }

  async findGigsByUser(userId: number) {
    return this.prisma.userGig.findMany({
      where: { userId },
      include: { gig: true },
    });
  }

  findAll() {
    return this.prisma.userGig.findMany();
  }

  async findOne(id: number) {
    return this.prisma.userGig.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.UserGigUpdateInput) {
    return this.prisma.userGig.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.userGig.delete({
      where: { id },
    });
  }
}
