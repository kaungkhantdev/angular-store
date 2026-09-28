import { inject, Service, Signal } from '@angular/core';
import { APP_CONFIG } from '../../../core/config/app-config';
import { HttpClient, httpResource, HttpResourceRef } from '@angular/common/http';
import { Order, OrderItem } from './cart.model';
import { httpContext } from '../../../core/http/http-context';
import { Observable, map } from 'rxjs';

interface CartDto {
  readonly id: number;
  readonly userId: number;
  readonly date: string;
  readonly products: readonly OrderItem[];
}

function toOrder(dto: CartDto): Order {
  return {
    id: dto.id,
    userId: dto.userId,
    date: dto.date,
    items: dto.products.map(({ productId, quantity }) => ({ productId, quantity })),
  };
}


@Service()
export class CartService {
  private readonly http = inject(HttpClient);
  private readonly url = `${inject(APP_CONFIG).apiBaseUrl}/carts`;

  forUser(userId: Signal<number | undefined>): HttpResourceRef<Order[]> {
    return httpResource(
      () => {
        const id = userId();
        return id === undefined
          ? undefined
          : { url: `${this.url}/user/${id}`, context: httpContext({ silentErrors: true }) };
      },
      { defaultValue: [], parse: (raw) => (raw as CartDto[]).map(toOrder) },
    )
  }

  create(userId: number, items: readonly OrderItem[]): Observable<Order> {
    const body = { userId, date: new Date().toISOString(), products: items };
    return this.http.post<CartDto>(this.url, body).pipe(map(toOrder));
  }
}
