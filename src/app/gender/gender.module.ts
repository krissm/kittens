import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenderRoutingModule } from './gender-routing.module';
import { GenderComponent } from './gender.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [GenderComponent],
  imports: [
    CommonModule,
    GenderRoutingModule,
    SharedModule,
  ]
})
export class GenderModule { }
