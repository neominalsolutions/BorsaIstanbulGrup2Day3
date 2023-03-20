import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { RolesPagesComponent } from './pages/roles-pages/roles-pages.component';
import { UserDetailPageComponent } from './pages/user-detail-page/user-detail-page.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { PermissionLoadGuard } from '../_services/permission-load.guard';
import { UserDropdownComponent } from './pages/_features/user-dropdown/user-dropdown.component';
import { MatSelectModule } from '@angular/material/select';
import { RoleAssignementPageComponent } from './pages/role-assignement-page/role-assignement-page.component';
import { PermissionAssignmentPageComponent } from './pages/permission-assignment-page/permission-assignment-page.component';

@NgModule({
  declarations: [
    AdminComponent,
    UsersPageComponent,
    RolesPagesComponent,
    UserDetailPageComponent,
    // UserDropdownComponent, standalone componentler import edilirken declaration kısmına değil direct olarak imports kısmına eklenir.
    RoleAssignementPageComponent,
    PermissionAssignmentPageComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxPermissionsModule.forChild({
      permissionsIsolate: true,
    }),
    MatSelectModule,
    UserDropdownComponent, // sanki bir module gibi ekledik. // Standalone componentleri kullanacağımız modüllere sanki bir module gibi import ederiz.
  ],
})
export class AdminModule {}
