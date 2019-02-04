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
    product.quantity--;
  }

  delete(productId: string) {
    const currentIndex = this.products.findIndex(p => p.product.id === productId);
    if (currentIndex > -1) {
      this.products[currentIndex].count--;
      this.products[currentIndex].product.quantity++;
    }

    if (this.products[currentIndex].count === 0) {
      this.products.splice(currentIndex, 1);
    }
  }

  clear() {
    this.products = [];
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    this.products.forEach(i => totalPrice += i.product.price * i.count);
    return totalPrice;
  }

  getTotalAmount(): number {
    let totalAmount = 0;
    this.products.forEach(i => totalAmount += i.count);
    return totalAmount;
  }
}
