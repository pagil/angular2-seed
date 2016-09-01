import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
  selector: '[autoGrow]',
  host: {
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }
})
export class AutoGrowDirective {

  constructor(private el: ElementRef, private render: Renderer) {
  }

  onFocus() {
    this.render.setElementStyle(this.el.nativeElement, 'width', '200');
  }

  onBlur() {
    this.render.setElementStyle(this.el.nativeElement, 'width', '120');
  }
}
