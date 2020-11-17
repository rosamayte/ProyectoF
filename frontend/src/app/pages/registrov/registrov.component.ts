import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrov',
  templateUrl: './registrov.component.html',
  styleUrls: ['./registrov.component.css']
})
export class RegistrovComponent implements OnInit {

  itemList = ["i1",'i2','i3'];
  selected = [];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(i){
    const item = this.itemList[i];
    Swal.mixin({
      input: 'number',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1']
    }).queue([
      {
        title: item,
        text: 'Cantidad'
      }
    ]).then((result:any) => {
      if (result.value) {
        const answers = parseInt(result.value)
        this.selected.push({cantidad: answers, nombre: item})
      }
    })
  }

}
