import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { LayoutComponent } from './site-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SharedModule } from '../shared/shared.module';
import { UserDropdownComponent } from '../admin/pages/_features/user-dropdown/user-dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsPageComponent } from './pages/reactive-forms-page/reactive-forms-page.component';
import { ReactiveFormsGroupComponent } from './pages/reactive-forms-group/reactive-forms-group.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HomePageComponent,
    AboutPageComponent,
    ReactiveFormsPageComponent,
    ReactiveFormsGroupComponent,
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    SharedModule,
    UserDropdownComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SiteModule {}
