import { IsArray, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  userId: string;

  @IsArray()
  @IsNotEmpty()
  products: {
    productId: string;
    quantity: number;
  }[];
}
