import { Component ,ViewChild} from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.css']
})
export class BirthdaysComponent {
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

  mondisplay = this.monthNames[this.date.getMonth()];
  constructor(private authservice : AuthService){
  this.getbirthday()
  }
  
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  displayedColumns: string[] = [ 'Employee Name','Designation','Birthday'];
 applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.dataSource.filter = filterValue.trim().toLowerCase();
 
   if (this.dataSource.paginator) {
     this.dataSource.paginator.firstPage();
   }
 }

 birthday:any;
 getbirthday(){
  this.authservice.GetAllEmployees().subscribe(res=>{
    this.birthday =res

    this.dataSource = new MatTableDataSource(this.birthday)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  })
 }
}
