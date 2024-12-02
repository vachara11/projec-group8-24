import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { CodPageRoutingModule } from './cod-routing.module';

import { CodPage } from './cod.page';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodPageRoutingModule,
    HttpClientModule
  ],
  providers: [],
  declarations: [CodPage]
})
export class CodPageModule {}
