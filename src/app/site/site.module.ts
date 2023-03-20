import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { LayoutComponent } from './site-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SharedModule } from '../shared/shared.module';
import { ButtonModule } from '../shared/components/custom-button/button.module';

@NgModule({
  declarations: [LayoutComponent, HomePageComponent, AboutPageComponent],
  imports: [CommonModule, SiteRoutingModule, SharedModule],
})
export class SiteModule {}
