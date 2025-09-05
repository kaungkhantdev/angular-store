import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/home-page.component';
import { AuthLayoutComponent } from './layout/auth-layout.component';
import { NotFoundPageComponent } from './components/not-found-page.component';
import { LoginPageComponent } from './features/auth/login-page.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomePageComponent

            }
        ]
    },
    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'login',
                component: LoginPageComponent
            }
        ]
    },
    { 
        path: '**', 
        component: NotFoundPageComponent 
    }
];
