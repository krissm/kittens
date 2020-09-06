import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenderComponent } from './gender.component';

const routes: Routes = [{ path: '', component: GenderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenderRoutingModule { }
