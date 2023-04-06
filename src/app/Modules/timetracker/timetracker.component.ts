import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-timetracker',
  templateUrl: './timetracker.component.html',
  styleUrls: ['./timetracker.component.css']
})
export class TimetrackerComponent  implements OnInit{
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  timetrackerheader = "Time Tracker"
  displayedColumns: string[] =  ['Employee Id','Date','Name' ,'TimeIn','TimeOut','OnOffice'];
  dataSource:any;
  contact: any;

  constructor(private authservice : AuthService,private builder:FormBuilder){

    
  }

 
  
  ngOnInit(): void {
    this.gettimetracker()
  }
 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
checkinlist:any;


empidcheck = localStorage.getItem('employeeId')


gettimetracker(){
  this.authservice.getcheckindata().subscribe(res=>{
    this.checkinlist = res;
     debugger
     var filteredUnitsLlist = this.checkinlist.filter((x:any)=>x.employeeid==this.empidcheck)
    this.dataSource = new MatTableDataSource(filteredUnitsLlist)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  })
 
}
}
