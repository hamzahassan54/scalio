import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultScreenRoutingModule } from './result-screen-routing.module';
import { ResultComponent } from './result/result.component';

import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    ResultComponent
  ],
  imports: [
    CommonModule,
    ResultScreenRoutingModule,
    MatButtonModule
  ]
})
export class ResultScreenModule { }
