import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ProductoCompraComponent } from './components/producto-compra/producto-compra.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {path:"inicio",component:HomeComponent},
  {path:"shop",component:TiendaComponent},
  {path:"compra/:id",component:ProductoCompraComponent},
  {path:"admin/formulario/:id",component:FormComponent},
  {path:"carrito",component:CarritoComponent},
  {path:"login",component:LoginComponent},
  {path:"formulario/:id",component:FormComponent},
  {path:"**",redirectTo:"inicio"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
