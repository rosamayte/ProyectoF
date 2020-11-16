import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrov',
  templateUrl: './registrov.component.html',
  styleUrls: ['./registrov.component.css']
})
export class RegistrovComponent implements OnInit {

  itemList = ["i1",'i2','i3'];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(item){
  }

}
