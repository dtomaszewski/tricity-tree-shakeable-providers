import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SopotComponent } from './sopot/sopot.component';

const routes: Routes = [ {
  path: '',
  component: SopotComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SopotRoutingModule { }
