import { Component, EventEmitter, Input, Output } from '@angular/core';

// kendimize type değeri açarak string olarak gönderilecek yada number değerleri koruma altına alırızç
type btnClassType = 'primary' | 'secondary';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'],
})
export class CustomButtonComponent {
  // component prototip
  @Input() btnTitle: string = '';
  @Input() btnClass: btnClassType = 'primary'; // primary, secondary

  @Output() onClick = new EventEmitter<any>();

  click(event: any) {
    this.onClick.emit(event);
  }
}
