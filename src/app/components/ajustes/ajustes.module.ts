import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjustesRoutingModule } from './ajustes-routing.module';
import { AjustesComponent } from './ajustes.component';


@NgModule({
  declarations: [AjustesComponent],
  imports: [
    CommonModule,
    AjustesRoutingModule
  ]
})
export class AjustesModule { }
