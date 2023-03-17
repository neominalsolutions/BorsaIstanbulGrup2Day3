import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

export type LoginForm = {
  username?: string;
  password?: string;
};

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  loginFormModel: LoginForm = {
    username: 'eve.holt@reqres.in',
    password: 'cityslicka',
  };

  /**
   *
   */
  constructor(private ls: LoginService) {}

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      console.log('data', loginForm);

      this.ls.login('https://reqres.in/api/login', loginForm.value).subscribe({
        next: () => {
          // gerçek senaryoda burada yapalım
        },
        error: (err) => {
          // hata durumunda toastr message
        },
      });
      loginForm.reset();
    }
  }
}
