import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  templateUrl: './reactive-forms-group.component.html',
  styleUrls: ['./reactive-forms-group.component.css'],
})
export class ReactiveFormsGroupComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  pForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: '',
    address: this.fb.group({
      // nested form group yapısı, onjeleri nested tutmak için kullanılır.
      city: [''],
      state: [''],
    }),
    aliases: this.fb.array([this.fb.control('')]),
  });

  // form dizisindeki alanları okumak için dinamik dizi elemanlarını okumak için bir controller erişim şekli.
  get aliases() {
    return this.pForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
  });

  onSubmit() {
    console.log('form-value', this.pForm.value);
  }

  ngOnInit(): void {
    // forma veri set edebiliriz.
    this.profileForm.patchValue({
      firstName: 'can',
      lastName: 'kaan',
    });

    this.profileForm.get('firstName')?.valueChanges.subscribe((value) => {
      console.log('fname-value');
      if ((value as string)?.length > 8) {
        this.profileForm.get('lastName')?.setValue('test');
      }
    });

    this.profileForm.statusChanges.subscribe((frm) => {
      console.log('frm', frm);
    });

    this.profileForm.get('lastName')?.reset();
  }
}
