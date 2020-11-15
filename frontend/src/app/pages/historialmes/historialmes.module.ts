import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HistorialmesComponent } from './historialmes.component';

const routes: Routes = [
  { path: '**', component: HistorialmesComponent }
];

@NgModule({
  declarations: [
    HistorialmesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HistorialmesModule { }

