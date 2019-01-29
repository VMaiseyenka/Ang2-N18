import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ProductModel } from '../../models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: ProductModel;
  @Output() buy = new EventEmitter();

  constructor() { }

  get isAvailable(): boolean {
    return this.product.quantity > 0;
  }

  onBuy() {
    this.buy.emit();
  }
}
