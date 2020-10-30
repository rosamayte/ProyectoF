import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { RegistrovComponent } from './pages/registrov/registrov.component';
import { RegistrocComponent } from './pages/registroc/registroc.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './helpers/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
// import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

const routes: Routes = [
  { path: 'historial', loadChildren: () => import('./pages/historial/historial.module').then(m => m.HistorialModule) },
  { path: 'registroc', loadChildren: () => import('./pages/registroc/registroc.module').then(m => m.RegistrocModule) },
  { path: 'registrov', loadChildren: () => import('./pages/registrov/registrov.module').then(m => m.RegistrovModule) },
  { path: '**', redirectTo:'historial' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
    // SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
