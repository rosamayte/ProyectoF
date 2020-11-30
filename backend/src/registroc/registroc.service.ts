import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Registro } from 'src/schemas/registro';

@Injectable()
export class RegistrocService {
  constructor(@InjectModel(Registro.name) private registroModel: Model<Registro>) { }

  async addRegistro(createRegistro): Promise<Registro> {
    const createdRegistro = new this.registroModel(createRegistro);
    return createdRegistro.save()
  }

  async getAllRegistros(): Promise<Array<Registro>> {
    return this.registroModel.find().exec();
  }

  async getOne(id): Promise<Registro> {
    const found = await this.registroModel.findById(id).exec();
    return found ? found : null;
  }

  async updateRegistro(registro): Promise<Registro> {
    const found = await this.registroModel.findById(registro._id).exec();
    if (!found) throw new Error(null)
    found.set(registro)
    return found.save()
  }

  async deleteRegistro(_id: string): Promise<Registro> {
    return this.registroModel.findByIdAndDelete(_id).exec();
  }
}
