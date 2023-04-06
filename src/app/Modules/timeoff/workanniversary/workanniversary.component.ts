import { Component,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-workanniversary',
  templateUrl: './workanniversary.component.html',
  styleUrls: ['./workanniversary.component.css']
})
export class WorkanniversaryComponent {
  dataSource:any;
  date = new Date();
 datedisplay = this.date.getDate();
  monthNames = [
   'Jan',
   'Feb',
   'Mar',
   'Apr',
   'May',
   'Jun',
   'Jul',
   'Aug',
   'Sep',
   'Oct',
   'Nov',
   'Dec',
 ];
yeardisplay = this.date.getFullYear();

 mondisplay = this.monthNames[this.date.getMonth()];
 constructor(private authservice : AuthService){
 this.getanniversary()

 }
 
 @ViewChild(MatPaginator) paginator !: MatPaginator;
 @ViewChild(MatSort) sort !: MatSort;
 displayedColumns: string[] = [ 'Employee Name','Designation','Date of Joining','Anniversary'];
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

anniversary:any;
getanniversary(){
 this.authservice.GetAllEmployees().subscribe(res=>{
   this.anniversary =res

   this.dataSource = new MatTableDataSource(this.anniversary)
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
 })
}
}
