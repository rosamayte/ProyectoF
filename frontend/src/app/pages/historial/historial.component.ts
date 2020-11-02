import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  private dataOriginal = null;
  public busqueda = '';
  public dataVisual = null;

  constructor() { }

  ngOnInit(): void {
    this.dataOriginal = [
      {
        fecha: new Date(),
        nombre: "Lisa Smith",
        precio: 2,
        cantidad: 12,
        cv: "c"
      },
      {
        fecha: new Date(),
        nombre: "misa Smith",
        precio: 2,
        cantidad: 12,
        cv: "c"
      }, {
        fecha: new Date(),
        nombre: "naruto Smith",
        precio: 2,
        cantidad: 12,
        cv: "c"
      }
    ];
    this.dataVisual = [...this.dataOriginal];
  }

  public searchByName(dataO = this.dataOriginal) {
    if (this.busqueda.length === 0) {
      this.dataVisual = [...dataO];
      return;
    }
    if (!this.busqueda) return;
    this.dataVisual = dataO.filter(d => d.nombre.toLowerCase().includes(this.busqueda.toLowerCase()));
  }

}
