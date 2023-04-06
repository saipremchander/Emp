import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../materialmodule';
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './Modules/login/login.component';

import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { TopbarComponent } from './Layouts/topbar/topbar.component';
import { VerticallayoutComponent } from './Layouts/verticallayout/verticallayout.component';
import { SidebarComponent } from './Layouts/sidebar/sidebar.component';
import { AdmintoolsComponent } from './Modules/admintools/admintools.component';
import { AttendanceComponent } from './Modules/attendance/attendance.component';
import { SelfserviceModule } from './Modules/selfservice/selfservice.module';
import { TimetrackerComponent } from './Modules/timetracker/timetracker.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    DashboardComponent,
     TopbarComponent,
     VerticallayoutComponent,
     SidebarComponent,
     AdmintoolsComponent,
     AttendanceComponent,
     TimetrackerComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SelfserviceModule,
    MaterialModule,ReactiveFormsModule,
    HttpClientModule,
   ToastrModule.forRoot(),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
