import { Controller, Delete, Patch, Post } from '@nestjs/common';
import { GigService } from './gig.service';

@Controller('gig')
export class GigController {
  constructor(private gigService: GigService) {}

  // add a gig
  // POST request
  // /api/gig/add
  @Post('add')
  async addGig() {
    return this.gigService.addGigService();
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
