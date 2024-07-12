import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@gamification/prisma-db';
import { CreateUserGigDto } from './dto/create-user.gig.dto';

@Injectable()
export class UserGigsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserGigDto) {
    console.log('data in user gig creation: ', data);
    const intUser = parseInt(data.userId.toString());

    if (!data.userId) {
      throw new NotFoundException(`User ID not provided!`);
    }

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

  findAll() {
    return `This action returns all userGigs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userGig`;
  }

  update(id: number, updateUserGigDto: any) {
    return `This action updates a #${id} userGig`;
  }

  remove(id: number) {
    return `This action removes a #${id} userGig`;
  }
}
