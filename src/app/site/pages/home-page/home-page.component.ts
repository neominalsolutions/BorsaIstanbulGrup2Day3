import { Component } from '@angular/core';
import {
  WebProtocolPipe,
  WebProtocolTypes,
} from 'src/app/shared/pipes/https.pipe';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [WebProtocolPipe], // pipeları ts tarafında kullanırken provide injecte etmeyi unutmayalım.
})
export class HomePageComponent {
  /**
   *
   */
  constructor(private pPipe: WebProtocolPipe) {}

  // enum değerini ara yüzde göstermek için bir getter tanımlamsı yaptım
  // enum değerlerini arayüzde kullanabilmek için yazılan bir yöntem.
  public get ProtocolTypes() {
    return WebProtocolTypes;
  }

  url: string = 'api/posts';

  onBtnClick(event: any) {
    // parent component içerisinde belki toastr göstericem bekli sayaç 1 artırıcam belkide apidan veri çekicem.
    alert('buton clicked');

    console.log('p', this.pPipe.transform('a.com', WebProtocolTypes.http));
  }
}
