import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { WorkanniversaryComponent } from './workanniversary/workanniversary.component';

const routes: Routes = [
  {path:'holidayslist',component:HolidaysComponent},
  {path:'notifications',component:NotificationsComponent},
  {path:'workanniversary',component:WorkanniversaryComponent},
  {path:'birthday',component:BirthdaysComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeoffRoutingModule { }
