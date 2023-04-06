import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeoffRoutingModule } from './timeoff-routing.module';
import { HolidaysComponent } from './holidays/holidays.component';
import { MaterialModule } from 'src/materialmodule';
import {ReactiveFormsModule} from '@angular/forms';
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { WorkanniversaryComponent } from './workanniversary/workanniversary.component'

@NgModule({
  declarations: [
    HolidaysComponent,
    BirthdaysComponent,
    NotificationsComponent,
    WorkanniversaryComponent
  ],
  imports: [
    CommonModule,
    TimeoffRoutingModule,MaterialModule,ReactiveFormsModule,
  ]
})
export class TimeoffModule { }
