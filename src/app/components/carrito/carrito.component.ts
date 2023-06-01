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
  constructor(private cartService:CartService){

  }
  ngOnInit(): void {
    this.getCart()
  }
  getCart(){
    this.cart=this.cartService.getItems()
    console.log(this.cart);
  }
  control(){
    const input = document.getElementById('myInput') as HTMLInputElement;

    input.addEventListener('change', () => {
      if (input.valueAsNumber < 1) {
        input.valueAsNumber = 1;
      }
    });
  }
}
