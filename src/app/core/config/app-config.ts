import { Environment } from '../../../environments/environment.model';
import { InjectionToken } from '@angular/core';
import { environment } from '../../../environments/environment';

export type AppConfig = Environment

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG', {
  providedIn: 'root',
  factory: () => environment
});
