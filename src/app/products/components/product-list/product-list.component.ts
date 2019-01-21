import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ProductModel } from '../../models';
import { ProductsService } from '../../services';
import { CartService } from '../../../cart/services';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

    products: ProductModel[];

    constructor(
        private poductsService: ProductsService,
        private cartService: CartService) { }

    ngOnInit() {
        this.products = this.poductsService.getAll();
    }

    onBuy(product: ProductModel) {
        this.cartService.buy(product);
    }

}
