import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListContainerComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: ListContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
