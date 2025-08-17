import { Type } from 'class-transformer';
import { IsArray, IsInt, IsNotEmpty, IsUUID, Min } from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  userId: string;

  @IsArray()
  @IsNotEmpty({
    each: true,
  })
  @Type(() => ProductDto)
  products: ProductDto[];
}

class ProductDto {
  @IsUUID()
  productId: string;

  @IsInt()
  @Min(1)
  quantity: number;
}
