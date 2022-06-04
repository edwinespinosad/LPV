import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LiteraturaComponent } from './components/literatura/literatura.component';
import { BookComponent } from './components/book/book.component';
import {PreviewComponent} from './components/preview/preview.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  // { path: '**', component: HomeComponent}, 
  { path: 'literatura', component: LiteraturaComponent},
  { path: 'libros', component: BookComponent},
  { path: 'preview/:id', component: PreviewComponent}
  
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
