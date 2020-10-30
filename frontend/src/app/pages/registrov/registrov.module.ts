import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialComponent } from '../historial/historial.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrovComponent } from './registrov.component';

const routes: Routes = [
  { path: '**', component: RegistrovComponent}
];

@NgModule({
  declarations: [
    RegistrovComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class RegistrovModule { }
