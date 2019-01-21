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

  onBuy() {
    console.log(`Buy product - ${this.product.name}`);
    this.buy.emit();
  }
}
