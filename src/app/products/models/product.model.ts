import { ProductCategory } from '../enums';

export class ProductModel {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public price: number,
        public category: ProductCategory,
        public isAvailable: boolean) { }
}
