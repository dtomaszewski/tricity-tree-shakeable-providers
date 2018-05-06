import { Injectable } from '@angular/core';

// This service is provided new way as a 'root' in service itself.
@Injectable({
  providedIn: 'root'
})
export class TricityService {

  constructor() { }

  tricityMethod() {
    return 'hello from brand new lazy load Tricity !';
  }
}
