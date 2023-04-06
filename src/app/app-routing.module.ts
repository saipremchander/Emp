import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { AdmintoolsComponent } from './Modules/admintools/admintools.component';
import { AttendanceComponent } from './Modules/attendance/attendance.component';
import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { LoginComponent } from './Modules/login/login.component';
import { TimetrackerComponent } from './Modules/timetracker/timetracker.component';



const routes: Routes = [
{path:'dashboard',component:DashboardComponent,canActivate :[AuthGuard]},
{path:'admintools',component:AdmintoolsComponent,canActivate :[AuthGuard]},
{path:'attendance',component:AttendanceComponent,canActivate :[AuthGuard]},
{
  path: 'selfservice',
  loadChildren: () => import('./Modules/selfservice/selfservice.module').then(m => m.SelfserviceModule)
},
{
  path: 'calender',
  loadChildren: () => import('./Modules/timeoff/timeoff.module').then(m => m.TimeoffModule)
},
{
  path: 'tasks',
  loadChildren: () => import('./Modules/tasks/tasks.module').then(m => m.TasksModule)
},
{path:'',component:LoginComponent},
{path:'time',component:TimetrackerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
