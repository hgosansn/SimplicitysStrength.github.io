import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { A1Component } from './pages/a1/a1.component';
import { B2Component } from './pages/b2/b2.component';
import { C3Component } from './pages/c3/c3.component';
import { D4Component } from './pages/d4/d4.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
  },
  {
    path: '1',
    component: A1Component
  }
  ,
  {
    path: '2',
    component: B2Component
  }
  ,
  {
    path: '3',
    component: C3Component
  }
  ,
  {
    path: '4',
    component: D4Component
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
