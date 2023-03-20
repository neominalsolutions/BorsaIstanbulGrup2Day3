import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { delay, finalize, Observable } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.method == 'GET') {
      this.loadingService.show();

      console.log('LoadingInterceptor', request);

      return next.handle(request).pipe(
        delay(2000),
        finalize(() => {
          this.loadingService.hide();
        })
      );
    }

    return next.handle(request);
  }
}
