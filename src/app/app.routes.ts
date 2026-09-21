import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
          import('./layout/main-layout/main-layout').then(m => m.MainLayout),
        children: [
          {
            path: '',
            title: 'Store',
            loadComponent: () =>
              import('./features/store/store').then(m => m.Store),
          }
        ]
    }
];
