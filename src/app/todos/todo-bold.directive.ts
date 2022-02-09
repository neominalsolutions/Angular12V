import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTodoBold]',
})
export class TodoBoldDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.fontSize = '28px';
    el.nativeElement.style.textDecoration = 'underline';
  }

  // html elemente event tanımlama şeklimiz
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.title = 'bu yazı kopyalanamaz';
  }

  @HostListener('dblclick') onDblClick() {
    this.el.nativeElement.style.display = 'none';
  }
}
