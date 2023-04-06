import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent  implements OnInit{
  Employeeprofile:string="Employee Overview";
  checkedin:boolean = false;
  checkedout:boolean = false;
  constructor(private _authservice : AuthService){
   this.getprofiledata();
   this.gettask()
  }
   
  profiledata:any;
  getprofiledata(){
   this._authservice.GetEmployeebyId(localStorage.getItem('employeeId')).subscribe(res=>{
       //console.log(res)
       this.profiledata = res;
   })

  }
  ngOnInit(): void {
    if(localStorage.getItem('status')){
      this.checkedin = true;
    } else{
      this.checkedout = true;
    }
  }
  tasklist:any
  filteredUnitsLlist:any
  gettask(){
    debugger
    this._authservice.viewtasklist().subscribe(res=>{
      this.tasklist = res
      this.filteredUnitsLlist = this.tasklist.filter((x:any)=>x.employeeId==localStorage.getItem('employeeId'))
      //console.log(filteredUnitsLlist)
    })
  }
}
