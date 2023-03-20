import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, tap } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';
import { LoginForm } from './login-page.component';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private aS: AuthService) {}

  login(url: string, data: LoginForm) {
    const _h = new HttpHeaders();
    _h.append('deneme', '1');

    return this.http.post(url, data, { headers: _h }).pipe(
      tap((data: any) => {
        localStorage.setItem('token', JSON.stringify(data.token));
        return data;
      }),
      finalize(() => {
        window.location.href = '/';
        this.aS.authenticate();
      })
    );
  }

  logOut() {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
}
