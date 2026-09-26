import { Environment } from './environment.model';

export const environment: Environment = {
  production: true,
  apiBaseUrl: 'https://fakestoreapi.com',
  auth: {
    sessionTtlSeconds: 60 * 60 * 8,
  },
};
