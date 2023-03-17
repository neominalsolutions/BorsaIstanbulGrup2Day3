import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser, UserService } from '../users-page/services/user.service';

@Component({
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.css'],
})
export class UserDetailPageComponent implements OnInit {
  user$!: Observable<IUser>;

  // route üzerinden route data yakalamak için activated route yapısı kullanıyoruz

  // o an istek atılan route bilgisini verir. param,querystring,userdefined data
  constructor(private aRoute: ActivatedRoute, private uS: UserService) {}
  ngOnInit(): void {
    console.log('aRoute', this.aRoute);

    const param = this.aRoute.snapshot.params;
    // routeParams
    //
    const c = this.aRoute.snapshot.queryParams as any;

    console.log('c', c?.username);

    this.user$ = this.uS.getUserDetail(c?.username);

    this.aRoute.queryParams.subscribe((param) => {
      console.log('param', param);
    });

    // console.log('param', param);
    // console.log('queryParam', queryParam);
  }
}
