import { Entity, model, property } from '@loopback/repository';

@model({
  name: 'products',
  settings: {}
})
export class Product extends Entity {
  @property({
    type: 'string',
    id: true,
    required: false,
    mongodb: { dataType: 'ObjectID' },
  })
  _id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

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
