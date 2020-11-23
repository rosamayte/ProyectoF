import { Module } from '@nestjs/common';
import { RegistrocController } from './registroc.controller';
import { RegistrocService } from './registroc.service';

@Module({
  controllers: [RegistrocController],
  providers: [RegistrocService]
})
export class RegistrocModule {}
