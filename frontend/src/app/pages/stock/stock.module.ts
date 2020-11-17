import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent} from '../stock/stock.component'

const routes: Routes = [
  { path: '**', component: StockComponent }
];

@NgModule({
  declarations: [
    StockComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StockModule { }
