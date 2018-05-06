import { GdyniaModule } from './gdynia.module';

describe('GdyniaModule', () => {
  let gdyniaModule: GdyniaModule;

  beforeEach(() => {
    gdyniaModule = new GdyniaModule();
  });

  it('should create an instance', () => {
    expect(gdyniaModule).toBeTruthy();
  });
});
