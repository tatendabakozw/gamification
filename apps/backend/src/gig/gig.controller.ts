import { Body, Controller, Delete, Patch, Post } from '@nestjs/common';
import { GigService } from './gig.service';
import { CreateGigDto } from './dto/gig.dto';

@Controller('gig')
export class GigController {
  constructor(private gigService: GigService) {}

  // add a gig
  // POST request
  // /api/gig/add
  @Post('add')
  async addGig(@Body() dto: CreateGigDto) {
    return this.gigService.addGigService(dto);
  }
  // edit available gig
  // PUT request
  // api/git/edit/id
  @Patch('add')
  async editGig() {
    return this.gigService.editGigService();
  }
  // delete a git
  // DELETE request
  // /api/git/delete/:id
  @Delete('delete')
  async deleteGig() {
    return this.gigService.deleteGigService();
  }
  // get all user gigs
  async getAllGigs() {
    return this.gigService.getAllGigsService();
  }
  // get single gig
  async getSingleGig() {
    return this.gigService.getSingleGigService();
  }
}
