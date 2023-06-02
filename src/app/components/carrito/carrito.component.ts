import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/producto';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit{
  cart:CartItem[]=[]
  precio:number=0;
  constructor(private cartService:CartService){

  }
  ngOnInit(): void {
    this.getCart()
  }
  getCart(){
    this.cart=this.cartService.getItems()
    console.log(this.cart);
  }
  updateTotalPrice(item: CartItem): void {
    if(item.product.precio!=null){
      this.precio = item.product.precio * item.quantity;
    }
  }
  calculateSubtotal(): number {
    let subtotal = 0;
    for (let item of this.cart) {
      subtotal += (item.product.precio || 0) * item.quantity;
    }
    return subtotal;
  }
  borrar(item:CartItem){
    this.cartService.removeFromCart(item)
    this.cart=this.cartService.getItems()
  }
}
