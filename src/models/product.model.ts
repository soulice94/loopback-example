import { Entity, model, property } from '@loopback/repository';

@model({
  name: 'products',
  settings: {}
})
export class Product extends Entity {
  @property({
    type: 'number',
    id: true,
    required: false,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  product: string;

  @property({
    type: 'string',
    required: true,
  })
  type: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  // describe navigational properties here
}

export type ProductWithRelations = Product & ProductRelations;
