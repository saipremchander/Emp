import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  calender: any;
  task: any;
  selfservice: any;
    /* Menu */
    selfserviceshow: boolean = false;
    calendershow: boolean = false;
    taskshow: boolean = false;

  constructor(){
    this.selfservice = [
      {
        name: 'Overview',
        link: 'selfservice/overview',
      },
      {
        name: 'Organisation',
        link: 'selfservice/organisation',
      },
    ];

    this.calender = [
      {
        name: 'Holidays',
        link: 'calender/holidayslist',
        role: 'isAdmin',
      },
      {
        name: 'Compensatory off',
        link: 'calender/coff',
        role: 'isUser',
      },
      {
        name: 'Leaves',
        link: 'calender/leaves',
        role: 'isUser',
      },
    ];
    this.task = [
      {
        name: 'All Tasks',
        link: 'tasks/tasklist',
      },
      {
        name: 'My Tasks',
        link: 'tasks/mytasks',
      },
      {
        name: 'Team Tasks',
        link: 'tasks/teamtasks',
      },
    ];
}
selfservicebtn() {
  this.selfserviceshow = !this.selfserviceshow;
  this.calendershow = false;
  this.taskshow = false;
}
calenderbtn() {
  this.calendershow = !this.calendershow;
  this.selfserviceshow = false;
  this.taskshow = false;
}
taskbtn() {
  this.taskshow = !this.taskshow;
  this.calendershow = false;
  this.selfserviceshow = false;
}
toggle() {
  this.calendershow = false;
  this.selfserviceshow = false;
  this.taskshow = false;
}


/*menu*/
adminmenu:boolean = false;
hrmenu:boolean = false;
menuemployee1:string ="Admin tools"
ngOnInit(): void {
  const rolecheck = localStorage.getItem('role')
  if(rolecheck == "admin"){
    this.adminmenu = true;
    this.menuemployee1 ="Admin tools"
  } else if(rolecheck == "hr"){
    this.adminmenu = true;
this.hrmenu = true;
    this.menuemployee1 ="Employee Details"
  }else if(rolecheck == "employee"){
 
  }



  
}

}
