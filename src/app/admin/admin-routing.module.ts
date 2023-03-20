import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { AuthGuard } from '../_services/auth.guard';
import { PermissionLoadGuard as AdminPermissionLoadGuard } from '../_services/permission-load.guard';
import { AdminComponent } from './admin.component';
import { PermissionAssignmentPageComponent } from './pages/permission-assignment-page/permission-assignment-page.component';
import { RoleAssignementPageComponent } from './pages/role-assignement-page/role-assignement-page.component';
import { UserDetailPageComponent } from './pages/user-detail-page/user-detail-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard], // tüm layouta girecek olan sayfaarı koruma altına al,
    data: {
      // sayafaya veri gönderme yöntemi
      title: 'Admin Layout',
    },
    children: [
      {
        path: 'users', // admin/user
        component: UsersPageComponent,
        data: {
          // bir componenete user-defined data göndermemizi sağlar.
          permissions: {
            only: 'user-list',
            redirectTo: '/unauthorized',
          },
        },
        canActivate: [NgxPermissionsGuard],
      },
      {
        path: 'user-detail/:username', // /admin/user-detail/bret/1/can
        component: UserDetailPageComponent,
      },
      {
        path: 'user-detail', // route paramsız hali query string için
        component: UserDetailPageComponent,
      },
      {
        path: 'role-assignment',
        component: RoleAssignementPageComponent,
      },
      {
        path: 'permission-assignment',
        component: PermissionAssignmentPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
