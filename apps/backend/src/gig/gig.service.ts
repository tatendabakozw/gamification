import { Injectable } from '@nestjs/common';
import { GigDto } from './dto/gig.dto';

@Injectable()
export class GigService {
  // add a gig
  async addGigService(dto: GigDto) {
    return;
  }

  // add a gig
  async editGigService() {
    return;
  }

  // delete a git
  // DELETE request
  // /api/git/delete/:id
  async deleteGigService() {
    return;
  }
  // get all user gigs
  async getAllGigsService() {
    return;
  }
  // get single gig
  async getSingleGigService() {
    return;
  }
}
