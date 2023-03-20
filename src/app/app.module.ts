import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './_pages/login-page/login-page.component';
import { NotfoundPageComponent } from './_pages/notfound-page/notfound-page.component';
import { UnauthorizedPageComponent } from './_pages/unauthorized-page/unauthorized-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  NgxPermissionsModule,
  NgxPermissionsModuleConfig,
} from 'ngx-permissions';
import { TokenInterceptor } from './_services/token.interceptor';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingInterceptor } from './_services/loading.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    NotfoundPageComponent,
    UnauthorizedPageComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    NgxPermissionsModule.forRoot(), // NgxPermissionService ngxRoleServices
  ],
  // providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  // HTTP_INTERCEPTORS uygulama genelinde birden fazla interceptor ile çalışabiliriz fakat HTTP_INTERCEPTORS provider name aynı kullanalım.
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
