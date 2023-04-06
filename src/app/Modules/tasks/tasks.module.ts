import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasklistComponent } from './tasklist/tasklist.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MytasksComponent } from './mytasks/mytasks.component';
import { TeamstasksComponent } from './teamstasks/teamstasks.component';

@NgModule({
  declarations: [
    TasklistComponent,
    MytasksComponent,
    TeamstasksComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,ReactiveFormsModule
  ]
})
export class TasksModule { }
