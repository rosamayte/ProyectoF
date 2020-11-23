import { Module } from '@nestjs/common';
import { HistorialmesController } from './historialmes.controller';
import { HistorialmesService } from './historialmes.service';

@Module({
  controllers: [HistorialmesController],
  providers: [HistorialmesService]
})
export class HistorialmesModule {}
