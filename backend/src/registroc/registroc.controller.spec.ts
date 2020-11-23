import { Test, TestingModule } from '@nestjs/testing';
import { RegistrocController } from './registroc.controller';

describe('RegistrocController', () => {
  let controller: RegistrocController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistrocController],
    }).compile();

    controller = module.get<RegistrocController>(RegistrocController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
