import { Component ,OnInit,ViewChild} from '@angular/core';
import { FormBuilder ,Validators,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr'
import { AuthService } from 'src/app/service/auth.service';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admintools',
  templateUrl: './admintools.component.html',
  styleUrls: ['./admintools.component.css'],

})
export class AdmintoolsComponent {

  constructor(
    private formbuilder : FormBuilder,
    private toastr : ToastrService,
    private _authservice : AuthService, private router :Router,
 ){

    this.GetEmployees()
    this.getroles();
   
  }

  rolelist:any
  getroles(){
    this._authservice.GetAllroles().subscribe(res=>{
      debugger
      this.rolelist = res
  })
}

  /* Form Declaration */ 

  showform:boolean = false;

registrationform = this.formbuilder.group({
  id: this.formbuilder.control('',Validators.required),
  firstName:this.formbuilder.control(''),
  lastName:this.formbuilder.control(''),
  employeename: this.formbuilder.control('',Validators.required),
  employeeemail:this.formbuilder.control('',Validators.compose([Validators.required,Validators.email])),
  //At least 8 characters in length Lowercase letters Uppercase letters Numbers Special characters
  password:this.formbuilder.control('',Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
  gender:this.formbuilder.control('male'),
  role:this.formbuilder.control('',Validators.required),
  profilepic:this.formbuilder.control(''),
 fatherName:this.formbuilder.control(''),
motherName:this.formbuilder.control(''),
dateofbirth:this.formbuilder.control(''),
dateofjoining:this.formbuilder.control(''),
designation:this.formbuilder.control('',Validators.required),
department:this.formbuilder.control('',Validators.required),
age:this.formbuilder.control(''),
aadhar:this.formbuilder.control(''),
pan:this.formbuilder.control(''),
address:this.formbuilder.control(''),

city:this.formbuilder.control(''),
state:this.formbuilder.control(''),
country:this.formbuilder.control(''),
refnumber:this.formbuilder.control('',Validators.compose([Validators.required, Validators.minLength(10),Validators.pattern('^[0-9]*$')])),
mobilenumber:this.formbuilder.control('',Validators.compose([Validators.required, Validators.minLength(10),Validators.pattern('^[0-9]*$')])),
isactive:this.formbuilder.control(false)
})
 
register(){
  if(this.registrationform.valid){
    debugger

    this._authservice.InsertEmployee(this.registrationform.value).subscribe(res=>{
      this.toastr.success('Please Contact admin to Activate Profile','Employee Added Successfully')
      this.router.navigate([''])
    })
  }else{
   this.toastr.warning('Please Enter Valid Data')
   this.submitted = true;
  }
}
/*validations*/
get validinput() { return this.registrationform.controls; }
  /* List Declaration */ 

  employeeslist:boolean = true;
  displayedColumns: string[] = ['Employee Id','Employee Name', 'Employee Email','Role', 'Status', 'Action'];

  submitted:boolean = false;
 employeelist:any;
 dataSource:any;
 @ViewChild(MatPaginator) paginator !: MatPaginator;
 @ViewChild(MatSort) sort !: MatSort;

 
 GetEmployees(){
  this._authservice.GetAllEmployees().subscribe(res=>{
    this.employeelist = res;
    this.dataSource = new MatTableDataSource(this.employeelist)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  })
 }



 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

/* Add and Update Employee */
editdata:any;
data:any;
readonly:boolean = false;
saveemp:boolean = true;
updateemp:boolean = false;
backlist:boolean =false;
hidebtns:boolean = true;
Employeeheader:string ="Employee List";
AddEmployee(){
         this.showform = true;
         this.employeeslist = false;
         this.saveemp=true;
         this.updateemp=false;
         this.Employeeheader ="Employee Registration";
         this.backlist =true;
         this.registrationform.reset();
         this.readonly = false;
}

updatepopup(id?:any){
  this.registrationform.enable()
  this.showform = true;
         this.employeeslist = false;
        this.readonly = true;
    this._authservice.GetEmployeebyId(id).subscribe(res=>{
    this.editdata = res;
    console.log(this.editdata)
     this.saveemp=false;
     this.backlist =true;
     this.updateemp=true;
     this.Employeeheader ="Update Employee";
    this.registrationform.patchValue({
        id:this.editdata.id,
      employeename:this.editdata.employeename,
      employeeemail:this.editdata.employeeemail,
      gender:this.editdata.gender,
      role:this.editdata.role,
      isactive:this.editdata.isactive,
      password:this.editdata.password,
      firstName:this.editdata.firstName,
      lastName :this.editdata.lastName,
      fatherName:this.editdata.fatherName,
      motherName:this.editdata.motherName,
      dateofbirth:this.editdata.dateofbirth,
      dateofjoining:this.editdata.dateofjoining,
      designation:this.editdata.designation,
      department:this.editdata.department,
      age:this.editdata.age,
      aadhar:this.editdata.aadhar,
      pan:this.editdata.pan,
      address:this.editdata.address,
      city:this.editdata.city,
      state:this.editdata.state,
      country:this.editdata.country,
    
    
      refnumber:this.editdata.refnumber,
      mobilenumber:this.editdata.mobilenumber,
      profilepic:this.editdata.profilepic,
    })
    
    })

}
viewpopup(id:any){
  this.updatepopup(id);
  this.registrationform.disable()
}
updateEmployee(){
   
    if(this.registrationform.valid){
     debugger
    this._authservice.UpdateEmployee(this.registrationform.value.id,this.registrationform.value).subscribe(res=>{
     this.toastr.success("Updated Successfully");
     this.GetEmployees();
     this.showform = false;
     this.employeeslist = true;
     this.backlist =false;
     this.submitted = true;
    })
    }
    else{
     this.toastr.warning("Please Enter Required Fields")
    }

}

back(){
  this.showform = false;
  this.employeeslist = true;
  this.Employeeheader ="Employee List";
  this.backlist =false;
  this.submitted = false;
}
ngOnInit(): void {
  const rolecheck = localStorage.getItem('role')
  if(rolecheck == "admin"){
 
 
  } else if(rolecheck == "hr"){
    this.hidebtns = false;

  }else if(rolecheck == "employee"){
         this.employeeslist = false;
         
         this.toastr.warning("You Dont Have Access to This Page")
         this.router.navigate(['dashboard'])
  }

 
}

 /* select file */
 imagename:any
 url:any
 imageload(evt:any) {

var files = evt.target.files;
 var file = files[0];
this.imagename = file.name;
if (files && file) {
 var reader = new FileReader();
reader.readAsDataURL(file);
 reader.onload = (e: any) => {
this.url = e.target.result

}
}
}

}
