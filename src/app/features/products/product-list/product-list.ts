import { Component, computed, effect, inject } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { Search } from '@primeicons/angular/search';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { Paginator, PaginatorModule, PaginatorState } from 'primeng/paginator';
import { ProductService } from '../data/product.service';
import { it } from 'vitest';
import { ProductError } from '../../../shared/ui/product-error/product-error';
import { ProductLoading } from '../../../shared/ui/product-loading/product-loading';
import { ProductCard } from '../../../shared/ui/product-card/product-card';
import { ProductEmpty } from '../../../shared/ui/product-empty/product-empty';

@Component({
  imports: [
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    Search,
    AvatarModule,
    TagModule,
    ButtonModule,
    PaginatorModule,
    Paginator,
    ProductError,
    ProductLoading,
    ProductCard,
    ProductEmpty,
  ],
  selector: 'app-products',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  private readonly service: ProductService = inject(ProductService);

  protected readonly products = this.service.getAll();

  private readonly logProducts = effect(() => {
    console.log('products:', this.products.value());
  });

  // items = [1, 2, 3, 4, 5, 6, 7, 8];
  //
  // first: number = 0;
  // rows: number = 10;
  // onPageChange(event: PaginatorState) {
  //   this.first = event.first ?? 0;
  //   this.rows = event.rows ?? 10;
  // }
  protected readonly it = it;
}
