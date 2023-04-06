import { Component ,ViewChild} from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {ToastrService} from 'ngx-toastr'
import { FormBuilder ,Validators,FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})

export class HolidaysComponent {
  holidaysheader:string = "Holidays List"
  dataSource:any;

 
@ViewChild(MatPaginator) paginator !: MatPaginator;
@ViewChild(MatSort) sort !: MatSort;
constructor(private _authservice : AuthService, private formbuilder : FormBuilder,private toaster : ToastrService){
this.getholidaylist()
}

holidayform = this.formbuilder.group({
  id:this.formbuilder.control(''),
  date: this.formbuilder.control('',Validators.required),
  festivalname: this.formbuilder.control('',Validators.required),
  description: this.formbuilder.control(''),
  greeting: this.formbuilder.control(''),
 })

displayedColumns: string[] = ['Date', 'Festival Name','Description', 'Action'];
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
submitted:boolean = true;
modal:boolean = false;
holidaylist:any;
hidebtns:boolean = true;
getholidaylist(){
  debugger
  this._authservice.getholidays().subscribe(res=>{
    this.holidaylist = res;
    this.dataSource = new MatTableDataSource(this.holidaylist)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  })
}
/*validations*/
get validinput() { return this.holidayform.controls; }
popup(){
  this.modal =true
  this.holidayform.reset()
  this.submitted = false
}
addholiday(){


if(this.holidayform.valid){
  this._authservice.postholiday(this.holidayform.value).subscribe(res=>{
    debugger
    this.toaster.success("Holiday Added SuccessFully")
    this.modal = false;
    this.getholidaylist()
  })
}
else{
  this.toaster.warning("Please Fill Required Fields")
}
}
close(){
  this.modal = false;
}
delete(id:number){
  this._authservice.deleteholiday(id).subscribe(res=>{
    this.toaster.warning("Holiday Deleted Successfully")
    this.getholidaylist();
  })
}


}
