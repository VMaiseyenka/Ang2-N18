import { ProductModel } from '../../products/models';

export class CartProductModel {
    constructor(
        public product: ProductModel,
        public count: number = 1) { }
}
