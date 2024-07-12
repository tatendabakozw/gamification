import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaDbModule, PrismaService } from '@gamification/prisma-db';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { GigModule } from '../gig/gig.module';
import { UserGigsModule } from '../user.gigs/user.gigs.module';

@Module({
  imports: [PrismaDbModule, AuthModule, UserModule, GigModule, UserGigsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
