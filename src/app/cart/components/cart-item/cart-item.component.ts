import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { CartProductModel } from '../../models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {

  @Input() item: CartProductModel;
  @Output() delete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit(this.item.product.id);
  }

}
