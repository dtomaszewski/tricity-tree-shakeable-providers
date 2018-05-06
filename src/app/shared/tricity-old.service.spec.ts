import { TestBed, inject } from '@angular/core/testing';

import { TricityOldService } from './tricity-old.service';

describe('TricityOldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TricityOldService]
    });
  });

  it('should be created', inject([TricityOldService], (service: TricityOldService) => {
    expect(service).toBeTruthy();
  }));
});
