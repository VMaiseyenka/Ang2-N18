import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CartProductModel } from '../../models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() item: CartProductModel;
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit(this.item.product.id);
  }

}
