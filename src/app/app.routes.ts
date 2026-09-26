import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
          import('./layout/main-layout/main-layout').then(m => m.MainLayout),
        children: [
          {
            path: '',
            title: 'Products',
            loadComponent: () =>
              import('./features/products/product-list/product-list').then(m => m.ProductList),
          }
        ]
    }
];
