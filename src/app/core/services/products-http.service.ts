import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models';

@Injectable()
export class ProductsHttpService {

    constructor(private http: HttpClient) { }

    get(): Promise<Product[]> {
        return this.http.get<Product[]>('./assets/data.json')
            .toPromise()
            .catch(this.handleError);
    }

    getById(id: number): Promise<Product> {
        return this.get()
            .then(response => response.find((product) => +product.id === id));
    }

    create(product: Product): Promise<number> {
        product.id = Math.floor(Math.random() * 1000 + 10);
        return this.http.put('./assets/data.json', product)
            .toPromise()
            .then(response => product.id);
    }

    update(product: Product) {
        return this.http.post('./assets/data.json', product)
            .toPromise()
            .then(response => product.id);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
