import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailHackathonPageRoutingModule } from './detail-hackathon-routing.module';

import { DetailHackathonPage } from './detail-hackathon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailHackathonPageRoutingModule
  ],
  declarations: [DetailHackathonPage]
})
export class DetailHackathonPageModule {}
