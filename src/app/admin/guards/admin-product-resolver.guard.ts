import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { ProductsService } from 'src/app/products/services';
import { ProductModel } from 'src/app/products/models';

@Injectable()
export class AdminProductResolverGuard implements Resolve<ProductModel> {

    constructor(
        private productService: ProductsService,
    ) { }

    resolve(route: ActivatedRouteSnapshot): Promise<ProductModel | null> {
        if (!route.paramMap.has('id')) {
            return Promise.resolve(new ProductModel(-1, '', 0, 0));
        }

        const id = +route.paramMap.get('id');
        return this.productService.getById(id)
            .then(response => response);
    }
}
