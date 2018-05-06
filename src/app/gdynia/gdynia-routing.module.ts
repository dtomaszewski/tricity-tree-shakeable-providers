import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GdyniaComponent } from './gdynia/gdynia.component';

const routes: Routes = [ {
  path: '',
  component: GdyniaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GdyniaRoutingModule { }
