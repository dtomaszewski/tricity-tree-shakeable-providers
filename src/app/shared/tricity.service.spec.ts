import { TestBed, inject } from '@angular/core/testing';

import { TricityService } from './tricity.service';

describe('TricityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TricityService]
    });
  });

  it('should be created', inject([TricityService], (service: TricityService) => {
    expect(service).toBeTruthy();
  }));
});
