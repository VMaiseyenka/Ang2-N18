import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/products/services';
import { ProductModel } from 'src/app/products/models';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

    products$: Promise<ProductModel[]>;

    constructor(
        private productsService: ProductsService
    ) { }

    ngOnInit() {
        this.products$ = this.productsService.getProducts();
    }

}
