import { Routes } from '@angular/router';

export const productsRoute: Routes = [
  {
    path: '',
    title: 'Products',
    loadComponent: () =>
      import('./product-list/product-list').then(m => m.ProductList),
  },
  {
    path: ':id',
    title: 'Product',
    loadComponent: () =>
      import('./product-detail/product-detail').then(m => m.ProductDetail),
  }
]
