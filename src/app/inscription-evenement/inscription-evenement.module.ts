import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionEvenementPageRoutingModule } from './inscription-evenement-routing.module';

import { InscriptionEvenementPage } from './inscription-evenement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptionEvenementPageRoutingModule
  ],
  declarations: [InscriptionEvenementPage]
})
export class InscriptionEvenementPageModule {}
