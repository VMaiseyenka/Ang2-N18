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
        return this.cartService.isEmptyCart();
    }

    get total(): number {
        return this.cartService.getTotalPrice();
    }

    deleteProduct(productId: string) {
        this.cartService.delete(productId);
    }

}
