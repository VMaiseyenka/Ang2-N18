import { Injectable } from '@angular/core';

import { ProductModel } from '../models';
import { ProductCategory } from '../enums';


@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    products: ProductModel[] = [
        new ProductModel(
            '1', 'A Brief History of Time',
            13.59, ProductCategory.Books,
            12,
            'A landmark volume in science writing by one of the great minds of our time, Stephen Hawking’s book...'),
        new ProductModel(
            '2', 'A Heartbreaking Work of Staggering Genius',
            10.84, ProductCategory.Books,
            20,
            'A book that redefines both family and narrative for the twenty-first century. A Heartbreaking Work of Staggerin...'),
        new ProductModel(
            '3',
            'Alice`s Adventures in Wonderland & Through the Looking-Glass',
            5.95, ProductCategory.Books,
            3,
            'In 1862 Charles Lutwidge Dodgson, a shy Oxford mathematician with a stammer, created a story about a little girl tumbling...'),
    ];

    constructor() { }

    getProducts(): Promise<ProductModel[]> {
        return new Promise<ProductModel[]>((resolve, reject) => {
            resolve(this.products);
        });
    }

    increaseProduct(productId: string) {
        const currentIndex = this.products.findIndex(p => p.id === productId);
        if (currentIndex > -1) {
            this.products[currentIndex].quantity++;
        }
    }

    decreaseProduct(productId: string) {
        const currentIndex = this.products.findIndex(p => p.id === productId);
        if (currentIndex > -1) {
            this.products[currentIndex].quantity--;
        }
    }
}
