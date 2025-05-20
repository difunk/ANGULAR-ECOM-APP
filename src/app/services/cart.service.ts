import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);
  
  addToCart(product: Product) {
    this.cart.set([...this.cart(), product])
  }

  removeFromCart(product: Product) {
    const items = [...this.cart()];
    const index = items.findIndex(item => item === product);

    if (index > -1) {
      items.splice(index, 1);
      this.cart.set(items);
    }
  }
  
  constructor() { }
}
