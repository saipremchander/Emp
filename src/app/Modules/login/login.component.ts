import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private formbuilder : FormBuilder,
    private toastr : ToastrService,
    private _authservice : AuthService, private router :Router ){
 }

 employeedata:any;
 loginform = this.formbuilder.group({
   employeename: this.formbuilder.control('',Validators.required),

  password:this.formbuilder.control('',Validators.required),
 
})
 
login(){
  if(this.loginform.valid){
    this._authservice.GetEmployeebyId(this.loginform.value.employeename).subscribe(res=>{
      this.employeedata = res;
      console.log(this.employeedata)
      if(this.employeedata.password === this.loginform.value.password){
          if(this.employeedata.isactive){
  localStorage.setItem('employeename',this.employeedata.employeename);
  localStorage.setItem('employeeId',this.employeedata.id);
  localStorage.setItem('role',this.employeedata.role);
  localStorage.setItem('department',this.employeedata.department);
  this.router.navigate(['dashboard'])
  this.toastr.success("Logged In Successfully")
          }else{
            this.toastr.error("Inactive User...! Please Contact Admin/HR")
          }
      }else{
       this.toastr.error("Invalid Credentials")
      }
    })
  }
}

/* check logged in user */

 ngOnInit(): void {
  if(this._authservice.IsLoggedIn()){
    this.router.navigate(['dashboard']);
   }

 }
}
