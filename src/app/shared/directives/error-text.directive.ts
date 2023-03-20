import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

// custom kendi directive'imizi yapıyoruz.
@Directive({
  selector: '[appErrorText]',
})
export class ErrorTextDirective implements OnInit {
  @Input() fontSize: string = '';
  // directive içerisine dinamik parametrelerde gönderebiliyoruz.

  constructor(private el: ElementRef, private renderer2: Renderer2) {}

  ngOnInit(): void {
    // yani ilgili directive uygulandığı elemente bir class ekle
    // renderer2 ile html dom üzerinde bir elemente müdehale etmek doma yeni bir element ekleme çıkarma stil değiştirme class ekleme vs dom işlemlerini yapmamızı sağlayan bir servis.
    this.renderer2.addClass(this.el.nativeElement, 'text-error');
    this.renderer2.setStyle(this.el.nativeElement, 'font-size', this.fontSize);
  }

  // element üstüne gelice ise dikkat yazısı gösterelim
  @HostListener('mouseover', ['$event'])
  MouseOver() {
    (this.el.nativeElement as HTMLElement).title = 'dikkat!';
  }
}
