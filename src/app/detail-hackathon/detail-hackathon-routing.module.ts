import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailHackathonPage } from './detail-hackathon.page';

const routes: Routes = [
  {
    path: '',
    component: DetailHackathonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailHackathonPageRoutingModule {}
