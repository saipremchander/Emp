import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-mytasks',
  templateUrl: './mytasks.component.html',
  styleUrls: ['./mytasks.component.css']
})
export class MytasksComponent {
constructor(private authservice : AuthService){
this.getmytasks()
}
tasklist:any;
filterdata : any;
getmytasks(){
  this.authservice.viewtasklist().subscribe(res=>{
    this.tasklist = res;
    this.filterdata = this.tasklist.filter((x:any)=>x.employeeId==localStorage.getItem('employeeId'))
  })
}
}
