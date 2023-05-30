import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ProductoCompraComponent } from './components/producto-compra/producto-compra.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth } from '@angular/fire/auth'
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    MainComponent,
    ProductsComponent,
    FooterComponent,
    TiendaComponent,
    ProductoCompraComponent,
    CarritoComponent,
    LoginComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
