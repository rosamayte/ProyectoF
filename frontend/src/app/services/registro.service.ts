import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public create = (body) => {
    return this.httpClient.post(`http://localhost:3000/registroc`, body).pipe(map(data => data));
  }

  public getAll = () => {
    return this.httpClient.get('http://localhost:3000/registroc').pipe(map(data => data));
  }

  public update = (body) => {
    return this.httpClient.patch(`http://localhost:3000/registroc`, body).pipe(map(data => data));
  }

  public delete = (id) => {
    return this.httpClient.delete(`http://localhost:3000/registroc/${id}`).pipe(map(data => data));
  }
}
