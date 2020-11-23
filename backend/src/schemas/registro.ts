import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class Registro extends Document {

  @Prop({
    type: String,
    required: true,
    unique: true
  })
  nombre: string;

  @Prop({
    type: Number,
    default: 1
  })
  cantidad: number;

  @Prop({
    type: Number,
    required: true
  })
  costo: number;

  @Prop({
    type: Number,
    default: null
  })
  preciov: number;

  @Prop({
    type: Date,
    default: Date.now()
  })
  fecha: Date;

  @Prop({
    type: Boolean,
    required: true
  })
  tipo: boolean;

  @Prop({
    type: Boolean,
    default: true,
  })
  estado: boolean;
}
export const RegistroSchema = SchemaFactory.createForClass(Registro);