import { Component, input } from '@angular/core';
import { Product } from '../../../features/products/data/product.model';
import { ButtonDirective } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { RouterLink } from '@angular/router';

@Component({
  imports: [ButtonDirective, Tag, RouterLink],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  readonly product = input.required<Product>();
}
