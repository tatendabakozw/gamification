import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaDbModule, PrismaService } from '@gamification/prisma-db';

@Module({
  imports: [PrismaDbModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
