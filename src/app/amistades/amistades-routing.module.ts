import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmistadesPage } from './amistades.page';

const routes: Routes = [
  {
    path: '',
    component: AmistadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmistadesPageRoutingModule {}
