import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormLoginPageRoutingModule } from './form-login-routing.module';

import { FormLoginPage } from './form-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormLoginPageRoutingModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: FormLoginPage
      }
    ])
    
  ],
  declarations: [FormLoginPage]
})
export class FormLoginPageModule {}
