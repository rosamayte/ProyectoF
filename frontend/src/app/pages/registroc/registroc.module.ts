import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialComponent } from '../historial/historial.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrocComponent } from './registroc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '**', component: RegistrocComponent }
];

@NgModule({
  declarations: [
    RegistrocComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegistrocModule { }
