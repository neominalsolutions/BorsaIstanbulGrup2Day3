import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsPageComponent } from './pages/reactive-forms-page/reactive-forms-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutComponent } from './site-layout.component';
import { ReactiveFormsGroupComponent } from './pages/reactive-forms-group/reactive-forms-group.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'home',
        component: HomePageComponent,
      },
      {
        path: 'about',
        component: AboutPageComponent,
      },
      {
        path: 'reactive-forms',
        component: ReactiveFormsPageComponent,
      },
      {
        path: 'reactive-forms-group',
        component: ReactiveFormsGroupComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteRoutingModule {}
