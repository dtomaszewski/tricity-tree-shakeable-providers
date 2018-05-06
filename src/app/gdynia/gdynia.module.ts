import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GdyniaRoutingModule } from './gdynia-routing.module';
import { GdyniaComponent } from './gdynia/gdynia.component';

@NgModule({
  imports: [
    CommonModule,
    GdyniaRoutingModule
  ],
  declarations: [GdyniaComponent]
})
export class GdyniaModule { }
