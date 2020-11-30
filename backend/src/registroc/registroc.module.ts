import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Registro, RegistroSchema } from 'src/schemas/registro';
import { RegistrocController } from './registroc.controller';
import { RegistrocService } from './registroc.service';

@Module({
  controllers: [RegistrocController],
  imports: [MongooseModule.forFeature([{ name: Registro.name, schema: RegistroSchema }])],
  providers: [RegistrocService]
})
export class RegistrocModule {}
