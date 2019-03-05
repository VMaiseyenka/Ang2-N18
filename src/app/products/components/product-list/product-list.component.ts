import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductModel } from '../../models';
import { ProductsService } from '../../services';
import { CartService } from 'src/app/cart/services';

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
        private cartService: CartService,
        private router: Router) { }

    ngOnInit() {
        this.products$ = this.productsService.getProducts();
    }

    showDetails(productId: string) {
        this.router.navigate(['products', productId]);
    }

    onBuy(product: ProductModel) {
        this.cartService.buy(product);
    }
}
