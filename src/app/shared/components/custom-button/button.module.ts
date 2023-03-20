import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button.component';

@NgModule({
  declarations: [CustomButtonComponent],
  imports: [CommonModule],
  exports: [CustomButtonComponent], // button componentler için bir modul açtık bütün button componentleri bu modül üzerinden export edebiliriz.
  // componentin module üzerinden export edilmesi var.
})
export class ButtonModule {}
