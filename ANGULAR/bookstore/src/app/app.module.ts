import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';

import {SwiperModule} from 'swiper/angular';
import { LiteraturaComponent } from './components/literatura/literatura.component';
import { RouterModule } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import {HttpClientModule} from '@angular/common/http';
import { PreviewComponent } from './components/preview/preview.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { PagoComponent } from './components/pago/pago.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LiteraturaComponent,
    BookComponent,
    PreviewComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    PagoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'literatura', component: LiteraturaComponent },
      { path: 'libros', component: BookComponent },
      { path: 'preview', component: PreviewComponent },
      { path: '**', component: HomeComponent}
    ]),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
