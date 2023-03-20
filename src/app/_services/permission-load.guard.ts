import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable({
  providedIn: 'root',
})
export class PermissionLoadGuard {
  constructor(private pService: NgxPermissionsService) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // api bağlan permissionları load et

    this.pService.addPermission('dashboard-report');
    this.pService.addPermission('view-quarter-report');
    this.pService.addPermission('user-edit');
    this.pService.addPermission('role-edit');

    console.log('permissions', this.pService.getPermissions());

    return true;
  }
}
