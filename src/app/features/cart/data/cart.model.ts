export interface CartLine {
  readonly productId: number;
  readonly title: string;
  readonly price: number;
  readonly image: string;
  readonly quantity: number;
}

export interface OrderItem {
  readonly productId: number;
  readonly quantity: number;
}

export interface Order {
  readonly id: number;
  readonly userId: number;
  readonly date: string;
  readonly items: readonly OrderItem[];
}
