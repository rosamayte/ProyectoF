import { Module } from '@nestjs/common';
import { RegistrovController } from './registrov.controller';
import { RegistrovService } from './registrov.service';

@Module({
  controllers: [RegistrovController],
  providers: [RegistrovService]
})
export class RegistrovModule {}
