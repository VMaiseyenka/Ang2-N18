import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services';
import { CartProductModel } from '../../models';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    cartItems: CartProductModel[];

    constructor(private cartService: CartService) { }

    ngOnInit() {
        this.cartItems = this.cartService.getCartProducts();
    }

    get isEmpty(): boolean {
        return !this.cartItems || !this.cartItems.length;
    }

    get itemsCount(): number {
        return this.cartItems.length;
    }

    get total(): number {
        let total = 0;
        this.cartItems.forEach(i => total += i.product.price * i.count);
        return total;
    }

    delProduct(productId: string) {
        this.cartService.delete(productId);
    }

}
