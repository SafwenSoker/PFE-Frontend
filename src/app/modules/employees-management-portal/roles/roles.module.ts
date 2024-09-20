import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { CreateRoleComponent } from './create-role/create-role.component';
import { GetRoleComponent } from './get-role/get-role.component';
import { GetRolesComponent } from './get-roles/get-roles.component';
import { UpdateRoleComponent } from './update-role/update-role.component';


@NgModule({
  declarations: [
    CreateRoleComponent,
    GetRoleComponent,
    GetRolesComponent,
    UpdateRoleComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule
  ]
})
export class RolesModule { }
