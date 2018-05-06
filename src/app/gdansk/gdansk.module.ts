import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GdanskRoutingModule } from './gdansk-routing.module';
import { GdanskComponent } from './gdansk/gdansk.component';

@NgModule({
  imports: [
    CommonModule,
    GdanskRoutingModule
  ],
  declarations: [GdanskComponent]
})
export class GdanskModule { }
