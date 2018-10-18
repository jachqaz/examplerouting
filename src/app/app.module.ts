import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './Introduction/home/home.component';
import {ContactoComponent} from './Introduction/contacto/contacto.component';
import {CochesComponent} from './coches/coches.component';
import {HomecomponentComponent} from './homecomponent/homecomponent.component';

const rutas: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'coches', component: CochesComponent},
  {path: 'coches/:marca/:modelo', component: CochesComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    CochesComponent,
    HomecomponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
