import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  // net core
  // nodejs
  // araya girme methodu
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // next ile arayazılımdaki akış bir sonraki middleware'e aktarıldır.
    // request client uygulamadan api yapılan network isteklerini yakalayan nesne

    console.log('rwquest', request);

    if (request.method == 'GET') {
      // api/user?username=ali // url param
      // request.Param postr yada put işlemlerinde request üzerinden gönderilen değerler. {id:'1',name:'ali'}

      console.log('Post request');
    }

    const headers = request.headers.append('Accept-Language', 'tr-TR');

    const accessToken = localStorage.getItem('token');

    // sadece access token varsa header'a acesstoken değerini göm kısmı
    if (accessToken != undefined) {
      // request readOnly bir nesne bu sebeple önce clone alınarak bir req copy oluşturulur daha sonrasında ise ilgili güncellemeler yapılır
      const req = request.clone({
        headers: headers.append('Authorization', `Bearer ${accessToken}`),
      });

      return next.handle(req);
    }

    // access tokensız işlemler için request gönder kısmı
    // api gittiği kısım
    return next.handle(request);
  }
}
