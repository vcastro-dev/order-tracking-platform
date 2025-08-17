export interface OrderCreatedEvent {
  orderId: string;
  userId: string;
  products: {
    productId: string;
    quantity: number;
  }[];
  timestamp: Date;
}
