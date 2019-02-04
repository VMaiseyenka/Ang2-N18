import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective, HostClickDirective } from './directives';
@NgModule({
  declarations: [
    HighlightDirective,
    HostClickDirective
  ],
  exports: [
    HighlightDirective,
    HostClickDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
