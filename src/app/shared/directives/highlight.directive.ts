import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[highlight]'
})
export class HighlightDirective {

  private colorDefault = 'lightgray';
  private el: HTMLElement;

  @Input('highlight') color: string;

  constructor(el: ElementRef, private render: Renderer2) {
    this.el = el.nativeElement;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.color || this.colorDefault);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.render.setStyle(this.el, 'background-color', color);
  }

}
