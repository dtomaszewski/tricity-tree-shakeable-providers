import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GdanskComponent } from './gdansk/gdansk.component';

const routes: Routes = [ {
  path: '',
  component: GdanskComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GdanskRoutingModule { }
