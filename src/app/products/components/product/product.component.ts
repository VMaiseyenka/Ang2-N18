import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductModel } from '../../models';
import { CartService } from 'src/app/cart/services';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {

    isCommentsShow: boolean;
    product: ProductModel;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private cartService: CartService
    ) {
        this.route.data.subscribe(data => {
            this.product = data.product;
          });
    }

    onBuy() {
        this.cartService.buy(this.product);
    }

    onActivate() {
        this.isCommentsShow = true;
    }

    onDeactivate() {
        this.isCommentsShow = false;
    }

    onCommentsShow(): void {
        this.router.navigate([
            { outlets: { 'product-comments': [this.isCommentsShow ? '' : 'comments'] } }
        ], { relativeTo: this.route });
    }
}
