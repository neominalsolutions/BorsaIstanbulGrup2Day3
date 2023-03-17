import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  // guard yapısı bir linkten başka bir linke giderken araya giren yapılarımız

  // yönlendirme işlmelerini ts dosyası üzerinden yapmak için RouterService kullanırız.

  /**
   *
   */
  constructor(private aS: AuthService, private r: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log('route', route);
    console.log('state', state);

    if (!this.aS.IsAuthenticatedValue()) {
      this.r.navigate(['/login']);
      return false;
    }

    return true;
  }
}
