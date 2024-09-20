import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPersonalInformationRoutingModule } from './user-personal-information-routing.module';
import { ViewEmployeesInformationsComponent } from './view-employees-informations/view-employees-informations.component';
import { ViewPersonalInformationComponent } from './view-personal-information/view-personal-information.component';


@NgModule({
  declarations: [
    ViewEmployeesInformationsComponent,
    ViewPersonalInformationComponent
  ],
  imports: [
    CommonModule,
    UserPersonalInformationRoutingModule
  ]
})
export class UserPersonalInformationModule { }
