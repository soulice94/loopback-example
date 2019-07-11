import { get } from '@loopback/rest';

// import {inject} from '@loopback/context';


export class ProductController {
  constructor() { }

  @get('/product')
  index(): object {
    return {
      successful: true,
      message: `All it's OK`,
    };
  }
}
