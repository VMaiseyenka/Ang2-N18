import { Injectable } from '@angular/core';

import { ProductModel } from '../models';
import { ProductCategory } from '../enums';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getAll(): ProductModel[] {
    return [
      new ProductModel(
        '1', 'A Brief History of Time',
        'A landmark volume in science writing by one of the great minds of our time, Stephen Hawking’s book...',
        13.59, ProductCategory.Books, true),
      new ProductModel(
        '2', 'A Heartbreaking Work of Staggering Genius',
        'A book that redefines both family and narrative for the twenty-first century. A Heartbreaking Work of Staggering Genius is the...',
         10.84, ProductCategory.Books, true),
      new ProductModel(
        '3',
        'Alice`s Adventures in Wonderland & Through the Looking-Glass',
        'In 1862 Charles Lutwidge Dodgson, a shy Oxford mathematician with a stammer, created a story about a little girl tumbling down...',
         5.95, ProductCategory.Books, false),
    ];
  }
}
