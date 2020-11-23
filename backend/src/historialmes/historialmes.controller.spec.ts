import { Test, TestingModule } from '@nestjs/testing';
import { HistorialmesController } from './historialmes.controller';

describe('HistorialmesController', () => {
  let controller: HistorialmesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistorialmesController],
    }).compile();

    controller = module.get<HistorialmesController>(HistorialmesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
