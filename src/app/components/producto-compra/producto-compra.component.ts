import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productoInterface } from 'src/app/model/producto';
import { CartService } from 'src/app/services/cart.service';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-producto-compra',
  templateUrl: './producto-compra.component.html',
  styleUrls: ['./producto-compra.component.css']
})
export class ProductoCompraComponent implements OnInit {
  producto:productoInterface={}
  accion: string = ""
  constructor(private cart:CartService,private data:DataApiService,private router: Router, private activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0") {

        this.accion = "new";
      } else {
        this.accion = "update";
        this.getProducto(params['id']);
      }
    })
  }
  getProducto(id: string) {
    this.data.getProducto(id).subscribe(resp => {
      this.producto = resp[0]
      this.producto.id = id
    })
  }
  cantidad: number = 1;
  aux=this.producto.cantidad as any
  incrementarCantidad() {
    if(this.producto.cantidad!=null){
      if (this.cantidad < this.producto.cantidad) {
        this.cantidad++;
      }
    }
  }

  decrementarCantidad() {
    if (this.cantidad > 1) {
      this.cantidad--;
    }
  }
  addCart(){
    this.cart.addToCart(this.producto,this.cantidad)
  }
}
