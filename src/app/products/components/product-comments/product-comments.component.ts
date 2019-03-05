import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { ProductsService } from '../../services';


@Component({
    selector: 'app-product-comments',
    templateUrl: './product-comments.component.html',
    styleUrls: ['./product-comments.component.scss']
})
export class ProductCommentsComponent implements OnInit {

    comments$;

    constructor(
        private productService: ProductsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.comments$ = this.route.parent.paramMap
            .pipe(
                switchMap((params: Params) => {
                    return params.get('productId')
                        ? this.productService.getComments(+params.get('productId'))
                        : Promise.resolve([]);
                }));
    }

}
