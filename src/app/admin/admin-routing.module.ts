import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_services/auth.guard';
import { AdminComponent } from './admin.component';
import { UserDetailPageComponent } from './pages/user-detail-page/user-detail-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard], // tüm layouta girecek olan sayfaarı koruma altına al
    children: [
      {
        path: 'users', // admin/user
        component: UsersPageComponent,
      },
      {
        path: 'user-detail/:username', // /admin/user-detail/bret/1/can
        component: UserDetailPageComponent,
      },
      {
        path: 'user-detail', // route paramsız hali query string için
        component: UserDetailPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
