import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { CardComponent } from './components/card/card.component';

const MODULES = [
  HttpClientModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
];

const COMPONENTS = [
  CardComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    ...MODULES,
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS,
  ]
})
export class SharedModule { }
