import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: 'white',
        }
      },
      license: 'eyJpZCI6ImI1YWEzOGI2LWE4NmItNDA3NC1iNjk2LTA0MWU0MmZhOThhNiIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODk3MTU1NTYsImV4cCI6MTgyMTI1MTU1Nn0.bk5olV6iU0lPGsVqmiwLwD8Ddw4QQ6o-qQpK7tEkm5bgTZBxECncrFsv1a0nwbydzHL1QLBijFUOQW3cubFUAA'
    })
  ]
};
