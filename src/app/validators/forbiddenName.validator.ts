import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

// AbstractControl tüm form controllerin base yapısı buradan gelir.
// ValidationErrors hata nesnesi
// artık validator helper sınıfımız bu

export class CustomValidators {
  static forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // dışarıdan gelen regex test ten geçer ise true olursa yasaklı kelime girilmiştir.
      const forbidden = nameRe.test(control.value);

      // Validators.required(control)

      // forbiddenName hata mesajı ile control value hata basılır değilse null hata yok
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }
}
