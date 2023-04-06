import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelfserviceRoutingModule } from './selfservice-routing.module';
import { OverviewComponent } from './overview/overview.component';


@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    SelfserviceRoutingModule
  ]
})
export class SelfserviceModule { }
