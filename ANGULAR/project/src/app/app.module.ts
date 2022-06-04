import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { routing, appRoutingProviders } from './app.routing';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LibroComponent} from './libro/libro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { HttpClientModule } from '@angular/common/http'
import {CommonModule} from '@angular/common';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    PeliculasComponent,
    ArticulosComponent,
    HomeComponent,
    ExternoComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'peliculas', component: PeliculasComponent },
      { path: 'libro', component: LibroComponent },
      { path: 'articulos', component: ArticulosComponent },
      { path: 'externo', component: ExternoComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: '**', component: HomeComponent}
    ]),
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
