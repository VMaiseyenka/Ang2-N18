import { Injectable } from '@angular/core';

import { CartProductModel } from '../models';
import { ProductModel } from '../../products/models';
import { ProductsService } from 'src/app/products/services';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private cartProducts: CartProductModel[];

    constructor(private productsService: ProductsService) {
        this.cartProducts = [];
    }

    getCartProducts(): CartProductModel[] {
        return this.cartProducts;
    }

    isEmptyCart(): boolean {
        return !this.cartProducts || !this.cartProducts.length;
    }

    buy(product: ProductModel) {
        const current = this.cartProducts.find(p => p.product.id === product.id);
        if (current) {
            current.count++;
        } else {
            this.cartProducts.push(new CartProductModel(product));
        }
    }

    delete(productId: number) {
        const currentIndex = this.cartProducts.findIndex(p => p.product.id === productId);
        if (currentIndex > -1) {
            this.cartProducts[currentIndex].count--;
        }

        if (this.cartProducts[currentIndex].count === 0) {
            this.cartProducts.splice(currentIndex, 1);
        }
    }

    clear() {
        this.cartProducts = [];
    }

    getTotalPrice(): number {
        let totalPrice = 0;
        this.cartProducts.forEach(i => totalPrice += i.product.price * i.count);
        return totalPrice;
    }

    getTotalAmount(): number {
        let totalAmount = 0;
        this.cartProducts.forEach(i => totalAmount += i.count);
        return totalAmount;
    }
}
