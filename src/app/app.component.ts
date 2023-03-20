import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';
import { LoadingService } from './_services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'RoutingApp';

  constructor(
    private pService: NgxPermissionsService,
    private rService: NgxRolesService,
    public lService: LoadingService
  ) {}
  ngOnInit(): void {
    // spa uygulama boostrapt olurken burada apidan permission load et.
    this.pService.loadPermissions(['show-profile', 'change-theme']);
    // this.rService.addRole('admin', ['download-dashboard-report']);

    console.log('rService', this.rService.getRoles());
  }
}
