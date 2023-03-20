import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './components/custom-button/button.module';
import { ErrorTextDirective } from './directives/error-text.directive';
import { TextUnderlineDirective } from './directives/text-underline.directive';
import { LabelComponent } from './components/label/label.component';
import { WebProtocolPipe } from './pipes/https.pipe';

@NgModule({
  declarations: [
    ErrorTextDirective,
    TextUnderlineDirective,
    LabelComponent,
    WebProtocolPipe,
  ],
  imports: [CommonModule, ButtonModule],
  exports: [
    ButtonModule,
    ErrorTextDirective,
    TextUnderlineDirective,
    LabelComponent,
    WebProtocolPipe,
  ], // module export
})
export class SharedModule {}
