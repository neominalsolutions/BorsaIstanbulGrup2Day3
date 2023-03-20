import { WebProtocolPipe } from './https.pipe';

describe('HttpsPipe', () => {
  it('create an instance', () => {
    const pipe = new WebProtocolPipe();
    expect(pipe).toBeTruthy();
  });
});
