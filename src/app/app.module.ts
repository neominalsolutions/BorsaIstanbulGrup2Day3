import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './_pages/login-page/login-page.component';
import { NotfoundPageComponent } from './_pages/notfound-page/notfound-page.component';
import { UnauthorizedPageComponent } from './_pages/unauthorized-page/unauthorized-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundPageComponent,
    UnauthorizedPageComponent,
    LoginPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  // providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
