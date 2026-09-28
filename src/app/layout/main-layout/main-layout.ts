import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartStore } from '../../features/cart/data/cart.store';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { ShoppingCart } from '@primeicons/angular';

@Component({
  imports: [CommonModule, ButtonModule, RouterOutlet, OverlayBadgeModule, ShoppingCart, RouterLink],
  selector: 'app-main-layout',
  styleUrl: './main-layout.css',
  templateUrl: './main-layout.html',
})
export class MainLayout {
  readonly cart = inject(CartStore);
}
