import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ProductModel } from '../../models';
import { ProductsService } from '../../services';
import { CartService } from '../../../cart/services';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    orders = [
        { value: 'name', name: 'Product name' },
        { value: 'price', name: 'Product price' },
        { value: 'quantity', name: 'Quantity' },
    ];

    form = new FormGroup({
        order: new FormControl(this.orders[0]),
    });

    products$: Promise<ProductModel[]>;

    get sortOrder(): string {
        return this.form.value.order.value;
    }

    constructor(
        private productsService: ProductsService,
        private cartService: CartService) { }

    ngOnInit() {
        this.products$ = this.productsService.getProducts();
    }

    onBuy(product: ProductModel) {
        this.cartService.buy(product);
    }

}
