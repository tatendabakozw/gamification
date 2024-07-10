// prisma-db.module.ts or equivalent

import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service'; // Adjust the path as necessary

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Ensure PrismaService is exported
})
export class PrismaDbModule {}

export { PrismaService }; // Ensure PrismaService is exported
