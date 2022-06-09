import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LiteraturaComponent } from './components/literatura/literatura.component';
import { BookComponent } from './components/book/book.component';
import { PreviewComponent } from './components/preview/preview.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {PagoComponent} from './components/pago/pago.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: '**', component: HomeComponent}, 
  { path: 'literatura', component: LiteraturaComponent },
  { path: 'libros', component: BookComponent },
  { path: 'preview/:id', component: PreviewComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'pago', component: PagoComponent }
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
