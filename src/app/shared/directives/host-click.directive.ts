import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostClick]'
})
export class HostClickDirective {

  private el: HTMLElement;

  @Input('appHostClick') color: string;

  constructor(el: ElementRef, private render: Renderer2) {
    this.el = el.nativeElement;
  }

  @HostListener('click')
  onClick() {
    console.log(this.color);
    this.render.setStyle(this.el, 'border', `1px solid ${this.color}`);
  }

}
