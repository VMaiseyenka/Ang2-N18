import { Injectable } from '@angular/core';

import { ProductModel } from '../models';
import { ProductsHttpService } from 'src/app/core/services';
import { Product } from 'src/app/core/models';


@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private productsHttpService: ProductsHttpService) { }

    getProducts(): Promise<ProductModel[]> {
        return this.productsHttpService.get()
            .then(response => response.map(this.mapToProductModel))
            .catch(response => Promise.resolve(ProductModel[0]));
    }

    getById(productId: number): Promise<ProductModel> {
        return this.productsHttpService.getById(productId)
            .then(response => this.mapToProductModel(response))
            .catch(response => Promise.resolve<ProductModel>(null));
    }

    getComments(id: number): Promise<string[]> {
        return this.productsHttpService.getById(id)
            .then(response => response.comments)
            .catch(response => Promise.resolve<string[]>([]));
    }

    private mapToProductModel(productDto: Product): ProductModel {
        return new ProductModel(
            +productDto.id,
            productDto.name,
            productDto.price,
            productDto.count,
            productDto.description,
        );
    }
}
