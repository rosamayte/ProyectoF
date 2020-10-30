import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HistorialComponent} from './historial.component';

const routes: Routes = [
  { path: '**', component: HistorialComponent}
];

@NgModule({
  declarations: [
    HistorialComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HistorialModule { }
