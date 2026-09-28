import { Component, inject } from '@angular/core';
import { CartService } from '../data/cart.service';
import { CartStore } from '../data/cart.store';

@Component({
  imports: [],
  selector: 'app-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
})
export class Cart {
  private readonly service = inject(CartService);
  private readonly cart = inject(CartStore);


}
