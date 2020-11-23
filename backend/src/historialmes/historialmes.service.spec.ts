import { Test, TestingModule } from '@nestjs/testing';
import { HistorialmesService } from './historialmes.service';

describe('HistorialmesService', () => {
  let service: HistorialmesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistorialmesService],
    }).compile();

    service = module.get<HistorialmesService>(HistorialmesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
