import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { GigService } from './gig.service';
import { CreateGigDto } from './dto/gig.dto';

@Controller('gig')
export class GigController {
  constructor(private gigService: GigService) {}

  // add a gig
  // POST request
  // /api/gig/create
  @Post('create')
  async addGig(@Body() dto: CreateGigDto) {
    return this.gigService.addGigService(dto);
  }
  // edit available gig
  // PUT request
  // api/git/edit/id
  @Patch('edit/:id')
  async editGig() {
    return this.gigService.editGigService();
  }
  // delete a git
  // DELETE request
  // /api/git/delete/:id
  @Delete('delete')
  async deleteGig(@Param('id', ParseIntPipe) id: number) {
    return this.gigService.deleteGigService(id);
  }

  // get all gigs
  // GET request
  // /api/gig/all
  @Get('all')
  async getAllGigs() {
    return this.gigService.getAllGigsService();
  }
  @Get(':id')
  async getSingleGig(@Param('id', ParseIntPipe) id: number) {
    return this.gigService.getSingleGigService(id);
  }
}
