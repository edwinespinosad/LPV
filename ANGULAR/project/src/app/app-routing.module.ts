import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ModuleWithProviders} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import {LibroComponent} from './libro/libro.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ExternoComponent } from './externo/externo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: 'libro', component: LibroComponent },
  { path: 'externo', component: ExternoComponent },
  { path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
