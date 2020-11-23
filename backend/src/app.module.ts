import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HistorialModule } from './historial/historial.module';
import { HistorialmesModule } from './historialmes/historialmes.module';
import { RegistrocModule } from './registroc/registroc.module';
import { RegistrovModule } from './registrov/registrov.module';
import { StockModule } from './stock/stock.module';

@Module({
  imports: [
    HistorialModule, 
    HistorialmesModule, 
    RegistrocModule, 
    RegistrovModule, 
    StockModule,
    MongooseModule.forRoot('mongodb://localhost/ferreteria')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
