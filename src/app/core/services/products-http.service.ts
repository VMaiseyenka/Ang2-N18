import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from '../models';
import { ProductsAPI } from '../config/products.config';

@Injectable()
export class ProductsHttpService {

    constructor(
        private http: HttpClient,
        @Inject(ProductsAPI) private dataUrl) { }

    get(): Observable<Product[]> {
        return this.http.get<Product[]>(this.dataUrl)
            .pipe(catchError(this.handleError));
    }

    getById(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.dataUrl}/${id}?timing=true`)
            .pipe(catchError(this.handleError));
    }

    create(product: Product): Promise<Product> {
        const productDto = { ...product };
        productDto.id = Math.floor(Math.random() * 90 + 10);

        return this.http.post<Product>(this.dataUrl, productDto)
            .toPromise();
    }

    update(product: Product) {
        const productDto = { ...product };

        return this.http.put<Product>(`${this.dataUrl}/${productDto.id}`, productDto)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
