import { ProductCategory } from '../enums';

export class ProductModel {
    constructor(
        public id: string,
        public name: string,
        public price: number,
        public category: ProductCategory,
        public quantity: number,
        public description?: string,
        public isAvailable?: boolean) { }
}
