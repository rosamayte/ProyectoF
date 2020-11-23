import { Test, TestingModule } from '@nestjs/testing';
import { RegistrocService } from './registroc.service';

describe('RegistrocService', () => {
  let service: RegistrocService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistrocService],
    }).compile();

    service = module.get<RegistrocService>(RegistrocService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
