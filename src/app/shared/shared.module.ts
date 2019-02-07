import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective, HostClickDirective } from './directives';
import { OrderByPipe } from './pipes/order-by.pipe';
@NgModule({
  declarations: [
    HighlightDirective,
    HostClickDirective,
    OrderByPipe
  ],
  exports: [
    HighlightDirective,
    HostClickDirective,
    OrderByPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
