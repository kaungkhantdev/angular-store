import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
          import('./layout/main-layout/main-layout').then(m => m.MainLayout),
        children: [
          {
            path: '',
            redirectTo: 'products',
            pathMatch: 'full',
          },
          {
            path: 'products',
            loadChildren: () =>
              import('./features/products/products.route').then((m) => m.productsRoute)
          }
        ]
    },

];
