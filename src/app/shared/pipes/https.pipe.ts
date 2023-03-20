import { Pipe, PipeTransform } from '@angular/core';

export enum WebProtocolTypes {
  https = 1,
  http = 2,
  ws = 3,
}

@Pipe({
  name: 'webProtocol',
})
export class WebProtocolPipe implements PipeTransform {
  // www
  // ws
  // http
  // https

  transform(url: string, protocolType: WebProtocolTypes): string {
    // pipelar veriyi alıp istedeiğimiz formatta çıktı veren yapılar.
    switch (protocolType) {
      case WebProtocolTypes.http:
        return `http://www/${url}`;
      case WebProtocolTypes.https:
        return `https://www/${url}`;
      case WebProtocolTypes.ws:
        return `ws:/${url}`;
    }
  }
}
