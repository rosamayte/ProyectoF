import { Test, TestingModule } from '@nestjs/testing';
import { RegistrovService } from './registrov.service';

describe('RegistrovService', () => {
  let service: RegistrovService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistrovService],
    }).compile();

    service = module.get<RegistrovService>(RegistrovService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
