import { Injectable } from '@nestjs/common';
import { CreateGigDto } from './dto/gig.dto';
import { PrismaService } from '@gamification/prisma-db';

@Injectable()
export class GigService {
  constructor(private prisma: PrismaService) {}
  // add a gig
  async addGigService(dto: CreateGigDto) {
    return this.prisma.gig.create({
      data: dto,
    });
  }

  // add a gig
  async editGigService() {
    return;
  }

  // delete a git
  // DELETE request
  // /api/git/delete/:id
  async deleteGigService(id: number) {
    await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
    return { message: 'Gig deleted Successfully!' };
  }
  // get all user gigs
  async getAllGigsService() {
    return await this.prisma.gig.findMany({});
  }
  // get single gig
  async getSingleGigService(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    return user;
  }
}
