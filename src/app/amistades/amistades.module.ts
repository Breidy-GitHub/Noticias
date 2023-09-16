import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmistadesPageRoutingModule } from './amistades-routing.module';

import { AmistadesPage } from './amistades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmistadesPageRoutingModule
  ],
  declarations: [AmistadesPage]
})
export class AmistadesPageModule {}
