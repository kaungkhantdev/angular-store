import { inject, Service, Signal } from '@angular/core';
import { HttpClient, httpResource, HttpResourceRef } from '@angular/common/http';
import { APP_CONFIG } from '../../../core/config/app-config';
import { Product } from './product.model';
import { httpContext } from '../../../core/http/http-context';

const READ_CONTEXT = httpContext({ silentErrors: true });

@Service()
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly url = `${inject(APP_CONFIG).apiBaseUrl}/products`;

  getAll(category?: Signal<string | null>): HttpResourceRef<Product[]> {
    return httpResource<Product[]>(
      () => {
        const selected = category?.() ?? null;
        return {
          url: selected ? `${this.url}/category/${encodeURIComponent(selected)}` : this.url,
          context: READ_CONTEXT,
        };
      },
      { defaultValue: []}
    );
  }

  getOneById(id: Signal<number>): HttpResourceRef<Product | null | undefined> {
    return httpResource<Product | null | undefined>(() => {
      return {
        url: `${this.url}/${id()}`,
        context: READ_CONTEXT
      };
    });
  }

}
