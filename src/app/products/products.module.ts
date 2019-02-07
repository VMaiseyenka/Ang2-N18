import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ProductComponent, ProductListComponent } from './components';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
  ],
  exports: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class ProductsModule { }
