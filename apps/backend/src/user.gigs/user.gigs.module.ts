import { Module } from '@nestjs/common';
import { UserGigsService } from './user.gigs.service';
import { UserGigsController } from './user.gigs.controller';

@Module({
  controllers: [UserGigsController],
  providers: [UserGigsService],
})
export class UserGigsModule {}
