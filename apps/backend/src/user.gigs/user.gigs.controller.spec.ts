import { Test, TestingModule } from '@nestjs/testing';
import { UserGigsController } from './user.gigs.controller';
import { UserGigsService } from './user.gigs.service';

describe('UserGigsController', () => {
  let controller: UserGigsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserGigsController],
      providers: [UserGigsService],
    }).compile();

    controller = module.get<UserGigsController>(UserGigsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
