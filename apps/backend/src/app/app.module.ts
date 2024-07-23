import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaDbModule, PrismaService } from '@gamification/prisma-db';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { GigModule } from '../gig/gig.module';
import { UserGigsModule } from '../user.gigs/user.gigs.module';
import { EmailModule } from '../email/email.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaDbModule,
    AuthModule,
    UserModule,
    GigModule,
    UserGigsModule,
    EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
