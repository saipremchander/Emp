import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MytasksComponent } from './mytasks/mytasks.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TeamstasksComponent } from './teamstasks/teamstasks.component';

const routes: Routes = [
  {path:"tasklist",component:TasklistComponent},
  {path:"mytasks",component:MytasksComponent},
  {path:"teamtasks",component:TeamstasksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
