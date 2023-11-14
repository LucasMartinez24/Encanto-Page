import { Injectable } from '@angular/core';
import { CartItem, productoInterface } from '../model/producto';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = [];

  constructor(private http: HttpClient) {
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
  private apiUrl = 'http://localhost:3000'; // Reemplaza con la URL de tu servidor Node.js

  cargarCarritoEnPreferencia(precio:number) {

    const orderData = {
      quantity: 1,
      description: 'Accesorios Encanto370',
      price: precio,
    };
    return this.http.post<any>('http://localhost:3000/crear-preferencia',orderData)
  }
}
