import { Component, inject, input, numberAttribute } from '@angular/core';
import { ProductService } from '../data/product.service';
import { ButtonDirective } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { RouterLink } from '@angular/router';

@Component({
  imports: [ButtonDirective, Tag, RouterLink],
  selector: 'app-product-detail',
  styleUrl: './product-detail.css',
  templateUrl: './product-detail.html',
})
export class ProductDetail {
  private readonly service: ProductService = inject(ProductService);
  readonly id = input.required({ transform: numberAttribute });

  readonly product = this.service.getOneById(this.id);
}
