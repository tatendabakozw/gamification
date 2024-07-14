import { CreateUserGigDto } from './dto/create-user.gig.dto';
import { updateUserGigDto } from './dto/update-user.gig.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { UserGigsService } from './user.gigs.service';
import { GetUser } from '../helpers/getUser';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';

@Controller('user.gigs')
export class UserGigsController {
  constructor(private readonly userGigsService: UserGigsService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  create(@Body() createUserGigDto: CreateUserGigDto) {
    return this.userGigsService.create(createUserGigDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('my-gigs')
  findUserGigs(@GetUser() user) {
    return this.userGigsService.findGigsByUser(user.id);
  }

  @Get()
  findAll() {
    return this.userGigsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userGigsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserGigDto: updateUserGigDto) {
    return this.userGigsService.update(+id, updateUserGigDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userGigsService.remove(+id);
  }
}
