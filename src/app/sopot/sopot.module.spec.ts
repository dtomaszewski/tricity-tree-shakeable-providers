import { SopotModule } from './sopot.module';

describe('SopotModule', () => {
  let sopotModule: SopotModule;

  beforeEach(() => {
    sopotModule = new SopotModule();
  });

  it('should create an instance', () => {
    expect(sopotModule).toBeTruthy();
  });
});
