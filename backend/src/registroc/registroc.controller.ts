import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { Registro } from 'src/schemas/registro';
import { Response, Request } from 'express';
import { RegistrocService } from './registroc.service';

@Controller('registroc')
export class RegistrocController {
  constructor(private readonly service: RegistrocService){ }

  @Post()
  async addRegistro(
    @Body() body,
    @Res() res: Response
  ): Promise<void> {
    this.service.addRegistro(body).then((registro: Registro) => {
      if (!registro) return res.status(HttpStatus.BAD_REQUEST).json(HttpStatus.BAD_REQUEST);
      res.status(HttpStatus.OK).json(registro);
    }, err => {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
    });
  }

  @Get()
  async getAllRegistros(
    @Res() res: Response
  ): Promise<void> {
    this.service.getAllRegistros().then((registro: Array<Registro>) => {
      if (!registro || registro.length < 1) return res.status(HttpStatus.NOT_FOUND).json(HttpStatus.NOT_FOUND);
      res.status(HttpStatus.OK).json(registro);
    }, err => {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }

  @Patch()
  async updateRegistro(
    @Body() body,
    @Res() res: Response
  ): Promise<void> {
    this.service.updateRegistro(body).then((registro: Registro) => {
      // if (!student) return res.status(HttpStatus.NOT_FOUND).json(HttpStatus.NOT_FOUND);
      res.status(HttpStatus.OK).json(registro);
    }, err => {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }

  @Delete(':id')
  async deleteRegistro(
    @Param('id') id: string,
    @Res() res: Response
  ): Promise<void> {
    this.service.deleteRegistro(id).then((registro: Registro) => {
      if (!registro) return res.status(HttpStatus.NOT_FOUND).json(HttpStatus.NOT_FOUND);
      res.status(HttpStatus.OK).json(registro);
    }, err => {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }

}

