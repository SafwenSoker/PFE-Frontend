import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaysoffRoutingModule } from './daysoff-routing.module';
import { GetDaysoffComponent } from './get-daysoff/get-daysoff.component';
import { RequestDaysoffComponent } from './request-daysoff/request-daysoff.component';


@NgModule({
  declarations: [
    GetDaysoffComponent,
    RequestDaysoffComponent
  ],
  imports: [
    CommonModule,
    DaysoffRoutingModule
  ]
})
export class DaysoffModule { }
