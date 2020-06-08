import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { A1Component } from './pages/a1/a1.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
  },
  {
    path: '1',
    component: A1Component
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
