import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { LoginPageComponent } from './_pages/login-page/login-page.component';
import { NotfoundPageComponent } from './_pages/notfound-page/notfound-page.component';
import { UnauthorizedPageComponent } from './_pages/unauthorized-page/unauthorized-page.component';
import { PermissionLoadGuard } from './_services/permission-load.guard';

const routes: Routes = [
  {
    path: '', // layout olan sayfa
    loadChildren: () => import('./site/site.module').then((m) => m.SiteModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    //canLoad: [PermissionLoadGuard], // module lazy yüklenirken yükle

    data: {
      // permissions: {
      //   only: 'admin',
      // },
      permissions: {
        only: ['show-profile'],
      },
    },
    canLoad: [],
  },
  {
    path: 'login', // tüm modüller için ortak olan linki app-routing taşıdık
    component: LoginPageComponent,
  },
  {
    path: 'unauthorized', // kendilerine ait tasarımı olup layout dışıda kalan sayfalar
    component: UnauthorizedPageComponent,
  },
  {
    path: '**', // bunu her zaman en alta yazarız sebebi ise diğer routeları ezmesin
    component: NotfoundPageComponent,
  },
];

// { useHash: true }

@NgModule({
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
