import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { RolesPagesComponent } from './pages/roles-pages/roles-pages.component';
import { UserDetailPageComponent } from './pages/user-detail-page/user-detail-page.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { PermissionLoadGuard } from '../_services/permission-load.guard';

@NgModule({
  declarations: [
    AdminComponent,
    UsersPageComponent,
    RolesPagesComponent,
    UserDetailPageComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxPermissionsModule.forChild({
      permissionsIsolate: true,
    }),
  ],
})
export class AdminModule {}
