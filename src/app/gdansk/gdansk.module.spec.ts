import { GdanskModule } from './gdansk.module';

describe('GdanskModule', () => {
  let gdanskModule: GdanskModule;

  beforeEach(() => {
    gdanskModule = new GdanskModule();
  });

  it('should create an instance', () => {
    expect(gdanskModule).toBeTruthy();
  });
});
