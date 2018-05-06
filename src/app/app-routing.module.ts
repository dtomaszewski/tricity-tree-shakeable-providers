import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'gdansk',
    loadChildren: './gdansk/gdansk.module#GdanskModule'
  },
  {
    path: 'gdynia',
    loadChildren: './gdynia/gdynia.module#GdyniaModule'
  },
  {
    path: 'sopot',
    loadChildren: './sopot/sopot.module#SopotModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
