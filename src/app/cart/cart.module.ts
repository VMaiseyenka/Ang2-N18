import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CartComponent, CartItemComponent } from './components';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent
  ],
  exports: [
    CartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    CartRoutingModule
  ]
})
export class CartModule { }
