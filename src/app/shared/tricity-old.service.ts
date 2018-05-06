import { Injectable } from '@angular/core';

// This service is provided old way in main application module
@Injectable()
export class TricityOldService {

  constructor() { }

  tricityMethod() {
    return 'hello from old Tricity :(';
  }
}
