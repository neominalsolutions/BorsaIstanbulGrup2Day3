import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextUnderline]',
})
export class TextUnderlineDirective {
  constructor(private el: ElementRef) {
    (this.el.nativeElement as HTMLElement).style.textDecorationLine =
      'underline';
  }
}
