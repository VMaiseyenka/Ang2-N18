import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from 'src/app/core/models';
import { ProductsHttpService } from 'src/app/core/services';


@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

    product: Product;

    constructor(
        private productService: ProductsHttpService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.product = { ...data.product };
        });
    }

    submit() {
        const product = { ...this.product };

        const method = product.id > 0 ? 'update' : 'create';
        this.productService[method](product)
            .then((id: number) => this.router.navigate(['products']));
    }

}
