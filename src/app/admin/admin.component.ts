import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  // admin layout admin module ait sayfaları temsil eder.
  // bu module istek atarken bu module ait permissionlarıda load edebiliriz.
  // eğer modul bazlı bir permission load etme durumumuz varsa bu durumda
  /*{
    permissionsIsolate: true,
    rolesIsolate: true,
  }
  */

  constructor(private pService: NgxPermissionsService) {}

  ngOnInit(): void {
    this.pService.addPermission('dashboard-report');
    this.pService.addPermission('view-quarter-report');
    this.pService.addPermission('user-edit');
    this.pService.addPermission('user-delete');
    this.pService.addPermission('user-list');
    this.pService.addPermission('role-edit');

    console.log('p', this.pService.getPermissions());
  }
}
