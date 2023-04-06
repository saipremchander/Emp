import { Component ,ViewChild} from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  dataSource:any;
 constructor(private authservice : AuthService){
 this.getnotifications()
 }
 
 @ViewChild(MatPaginator) paginator !: MatPaginator;
 @ViewChild(MatSort) sort !: MatSort;
 displayedColumns: string[] = ['Date', 'Employee Name','notifytype','Description'];
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
 notificationdata:any;
 getnotifications(){
  this.authservice.getnotification().subscribe(res=>{
    this.notificationdata =  res
    this.dataSource = new MatTableDataSource(this.notificationdata)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  })
 }
}
