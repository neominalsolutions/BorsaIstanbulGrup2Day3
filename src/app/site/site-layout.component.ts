import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_pages/login-page/login.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-site',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css'],
})
export class LayoutComponent implements OnInit {
  isAuthenticated = false;

  /**
   *
   */
  constructor(public aS: AuthService, private lg: LoginService) {}
  ngOnInit(): void {
    this.aS.IsAuthenticated().subscribe((value: boolean) => {
      console.log('auth-state', value);
      this.isAuthenticated = value;
    });
  }

  logOut() {
    this.lg.logOut();
  }
}
