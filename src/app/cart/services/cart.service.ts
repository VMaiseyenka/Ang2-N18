import { Injectable } from '@angular/core';

import { CartProductModel } from '../models';
import { ProductModel } from '../../products/models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: CartProductModel[];

  constructor() {
    this.products = [];
  }

  getCartProducts(): CartProductModel[] {
    return this.products;
  }

  buy(product: ProductModel) {
    const current = this.products.find(p => p.product.id === product.id);
    if (current) {
      current.count++;
    } else {
      this.products.push(new CartProductModel(product));
    }
  }

  delete(productId: string) {
    const currentIndex = this.products.findIndex(p => p.product.id === productId);
    if (currentIndex > -1) {
      this.products[currentIndex].count--;
    }

    if (this.products[currentIndex].count === 0) {
      this.products.splice(currentIndex, 1);
    }
  }
}
