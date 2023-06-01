import { Injectable } from '@angular/core';
import { CartItem, productoInterface } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = [];

  constructor() {
    const cart = JSON.parse(localStorage.getItem('cartI') || '[]');
    this.items = cart;
  }

  addToCart(product: productoInterface,cantidad:number): void {
    let item,i=0
    for (let index = 0; index < this.items.length; index++) {
      if(this.items[index].product.id === product.id){
        item = this.items[index];
        i=index
      }
    }
    if (item) {
      this.items[i]=({ product: product, quantity: cantidad });
    } else {
      this.items.push({ product: product, quantity: cantidad });
    }
    this.saveCart();
  }

  removeFromCart(item: CartItem): void {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
    this.saveCart();
  }

  getItems(): CartItem[] {
    return this.items;
  }
  private saveCart(): void {
    localStorage.setItem('cartI', JSON.stringify(this.items));
  }
  clearCart(): void {
    this.items = [];
    this.saveCart();
  }
}
