import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SopotRoutingModule } from './sopot-routing.module';
import { SopotComponent } from './sopot/sopot.component';

@NgModule({
  imports: [
    CommonModule,
    SopotRoutingModule
  ],
  declarations: [SopotComponent]
})
export class SopotModule { }
