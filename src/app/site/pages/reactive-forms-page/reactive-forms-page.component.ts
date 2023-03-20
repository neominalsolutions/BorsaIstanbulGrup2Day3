import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/validators/forbiddenName.validator';

@Component({
  selector: 'app-reactive-forms-page',
  templateUrl: './reactive-forms-page.component.html',
  styleUrls: ['./reactive-forms-page.component.css'],
})
export class ReactiveFormsPageComponent implements OnInit {
  errors: any[] = [];

  name = new FormControl('ali', [
    Validators.required,
    Validators.minLength(7),
    CustomValidators.forbiddenNameValidator(/bob/i),
  ]);

  ngOnInit(): void {
    this.name.valueChanges.subscribe((value) => {
      console.log('value', value);
    });

    this.name.statusChanges.subscribe((control) => {
      console.log('control', control);

      if (this.name.hasError('required')) {
        this.errors = [...this.errors, 'boş geçilemez'];
      }

      if (this.name.hasError('minlength')) {
        this.errors = [...this.errors, 'minimum 7 karakter olabilir'];
      }
    });

    this.name.setValue('can');
  }

  getValue() {
    alert(this.name.value);
  }
}
