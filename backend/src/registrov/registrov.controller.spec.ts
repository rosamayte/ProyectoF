import { Test, TestingModule } from '@nestjs/testing';
import { RegistrovController } from './registrov.controller';

describe('RegistrovController', () => {
  let controller: RegistrovController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistrovController],
    }).compile();

    controller = module.get<RegistrovController>(RegistrovController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
