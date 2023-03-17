import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuth = new BehaviorSubject<boolean>(false);

  constructor() {}

  authenticate() {
    this.isAuth.next(true);
  }

  IsAuthenticated() {
    const token = localStorage.getItem('token');

    if (token != undefined) {
      this.isAuth.next(true);
      return this.isAuth.asObservable();
    } else {
      this.isAuth.next(false);
      return this.isAuth.asObservable();
    }
  }

  IsAuthenticatedValue() {
    const token = localStorage.getItem('token');

    if (token != undefined) {
      this.isAuth.next(true);
      return this.isAuth.value;
    } else {
      this.isAuth.next(false);
      return this.isAuth.value;
    }
  }
}
