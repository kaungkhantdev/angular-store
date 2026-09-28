import { computed, effect, inject, Service, signal } from '@angular/core';
import { BROWSER_STORAGE } from '../../../core/storage/browser-storage';
import { CartLine } from './cart.model';
import { Product } from '../../products/data/product.model';

const CART_KEY = 'fake-store.cart';
const MAX_QUANTITY = 99;

@Service()
export class CartStore {
  private readonly storage = inject(BROWSER_STORAGE);
  private readonly cartLines = signal<readonly CartLine[]>([]);

  readonly lines = this.cartLines.asReadonly();
  readonly itemCount = computed(() => this.lines().reduce((sum, line) => sum + line.quantity, 0));

  add(product: Product, quantity: number = 1): void {
    const existing = this.lines().find((line) => line.productId === product.id);
    if (existing) {
      this.setQuantity(product.id, existing.quantity + quantity);
      return;
    }
    const { id: productId, title, price, image } = product;
    this.cartLines.update((lines) => [
      ...lines,
      {
        productId,
        title,
        price,
        image,
        quantity: clampQuantity(quantity),
      },
    ]);
  }

  setQuantity(productId: number, quantity: number = 1): void {
    if (!Number.isFinite(quantity) || quantity < 1) {
      this.remove(productId);
      return;
    }
    this.cartLines.update((lines) =>
      lines.map((line) =>
        line.productId === productId ? { ...line, quantity: clampQuantity(quantity) } : line,
      ),
    );
  }

  remove(productId: number): void {
    this.cartLines.update((lines) => lines.filter((line) => line.productId !== productId));
  }

  clear(): void {
    this.cartLines.set([]);
  }
}

function clampQuantity(quantity: number):number {
  return Math.min(Math.max(Math.trunc(quantity), 1), MAX_QUANTITY);
}
