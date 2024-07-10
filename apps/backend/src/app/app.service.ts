import { Injectable } from '@nestjs/common';
import { PrismaService } from '@gamification/prisma-db';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getData() {
    return this.prisma.product.findMany();
  }

  addProduct(dto: any) {
    return this.prisma.product.create({ data: dto });
  }
}
