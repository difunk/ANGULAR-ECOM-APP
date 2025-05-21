import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/products.model';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSummaryComponent],
  template: `
  <div class="p-6 flex flex-col gap-4">
    <h2 class="text-2xl">Shopping Cart</h2>
    @if (cartService.cart().length > 0 ) {
      @for (cartItem of cartService.cart(); track cartItem) {
        <app-cart-item [item]="cartItem"/>
      }
      <app-order-summary />
    } @else {
      <p>Dein Warenkorb ist leer.</p>
    }
  </div>
  `,
  styles: ``
})

export class CartComponent {
  constructor(public cart: CartService) {}

  cartService = inject(CartService)

  removeFromCart(item: Product) {
    this.cart.removeFromCart(item)
  }
}
