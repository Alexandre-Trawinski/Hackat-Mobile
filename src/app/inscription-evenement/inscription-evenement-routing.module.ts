import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionEvenementPage } from './inscription-evenement.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionEvenementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionEvenementPageRoutingModule {}
