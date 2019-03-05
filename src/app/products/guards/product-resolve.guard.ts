import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { ProductModel } from '../models';
import { ProductsService } from '../services';

@Injectable()
export class ProductResolveGuard implements Resolve<ProductModel> {
    constructor(
        private productService: ProductsService
    ) { }

    resolve(route: ActivatedRouteSnapshot): Promise<ProductModel | null> {
        if (!route.paramMap.has('productId')) {
            Promise.reject('error');
        }

        const id = +route.paramMap.get('productId');
        return this.productService.getById(id);
    }
}
