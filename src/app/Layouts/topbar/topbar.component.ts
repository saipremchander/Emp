import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  loggedinname:any;
topbar:boolean = false;
notifybox:boolean = false;
count0:boolean = false;
count:boolean = true;
  constructor(    private toastr : ToastrService,private router : Router,private _authservice :AuthService){
   this.getnotifications()
  }

  ngOnInit(): void {
    this.loggedinname = localStorage.getItem("employeename")
  }
  logout(){
    localStorage.clear()
     this.router.navigate([""])
       this.toastr.success("Employee Logged Out")
      
  }

    /*------------------------------*/
  /*notifications list*/
  /*------------------------------*/
  notificationlist:any;
  getnotifications(){
    debugger
    this._authservice.getnotification().subscribe((res)=>{
      this.notificationlist = res;
      console.log(res)
    })
  }
  notification(){
    this.notifybox =!this.notifybox;
    this.count0 = true;
    this.count = false
  }
  close(){
    this.notifybox =false;
    this.count0 = true;
  }
}
