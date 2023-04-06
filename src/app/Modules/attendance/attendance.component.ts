import { Component,ViewChild } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  displayedColumns: string[] =  ['Employee Id','Date','Name' ,'TimeIn','TimeOut','OnOffice','action'];
  dataSource:any;


  constructor(private _authservice:AuthService,private router: Router,private toastr : ToastrService){
    
 this.getemployeesattendance();

  }
  ngOnInit(): void {
    const rolecheck = localStorage.getItem('role')
    if(rolecheck == "admin"){
      this.toastr.warning("You Dont Have Access to This Page")
      this.router.navigate(['dashboard'])
   
    } else if(rolecheck == "hr"){
      
  
    }else if(rolecheck == "employee"){
          
           
           this.toastr.warning("You Dont Have Access to This Page")
           this.router.navigate(['dashboard'])
    }
  }
 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
checkinlist:any;


empidcheck = localStorage.getItem('employeeid')




  attendancedata:any;
getemployeesattendance(){
  this._authservice.getattendance().subscribe(res=>{
    this.attendancedata = res
    console.log(JSON.stringify(this.attendancedata))
     
    this.dataSource = new MatTableDataSource(this.attendancedata)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  })
}

data:any;
date = new Date()
empid = localStorage.getItem("employeeId");
markabs(id:any){

  this._authservice.GetEmployeebyId(id).subscribe(res=>{
    this.data = res
  
    let inputdata = {
      date:this.date.toLocaleDateString(),
      EmployeeId : this.empid,
      EmployeeName :this.data.employeename,
      Absent: 1,

    }
    this._authservice.postattendance(inputdata).subscribe(res=>{
         alert(JSON.stringify(res))
    })
})

}

markprs(id:any){
  this._authservice.GetEmployeebyId(id).subscribe(res=>{
    this.data = res
  
    let inputdata = {
      date:this.date.toLocaleDateString(),
      EmployeeId : this.empid,
      EmployeeName :this.data.employeename,
      present: 1,
    }
    this._authservice.postattendance(inputdata).subscribe(res=>{
         alert(JSON.stringify(res))
    })
})

}
}
