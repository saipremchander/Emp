import { Component ,OnInit,ViewChild} from '@angular/core';
import { FormBuilder ,Validators,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr'
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
loggedinuser: any;
  show: any;
    ssdisplay: any;
  
  constructor(
    private formbuilder : FormBuilder,
    private toastr : ToastrService,
    private _authservice : AuthService, private router :Router,
 ){



  }

  
  /*------------------------------*/
          /*Dashboard allot*/
 /*------------------------------*/
adminblock:boolean = false;
isEmployee:boolean=false;
hrblock : boolean =false;
  showingtimer: any;
  startTime: any;
  ngOnInit(): void {

    /*------------------------------*/
    /* Check local storeage for Checkin of user */
    /*------------------------------*/
    if(localStorage.getItem('status')){
      this.startTimer();
      this.btnbreak = true;
      this.checktext = "CheckOut";
      this.breaktext = "Take A Break"
    }

  
    /*------------------------------*/
    /* Check local storeage for Role of user */
    /*------------------------------*/
  const rolecheck = localStorage.getItem('role')
  if(rolecheck == "admin"){
    this.toastr.warning("Logged In as Admin");
    this.adminblock= true;  this.hrblock= true;
  } else if(rolecheck == "hr"){
    this.toastr.warning("Logged In as Hr");
    this.adminblock= true;
    this.hrblock= true;
  }else if(rolecheck == "employee"){
    this.toastr.warning("Logged In as Employee");
    this.isEmployee= true;
  }
  /*------------------------------*/
  /* Check local storeage for checked in user */
    /*------------------------------*/
 
  this.getnotifications();
  this.checkbirthday();
  this.getholidayslist()
this.gettasklist();
  this.markattendance();
  this.loggedinuser = localStorage.getItem('employeename')

  
  /*------------------------------*/
  /*checkin*/
  /*------------------------------*/
 
  const date = new Date();
  let hours = date.getHours();
  const monthNames = [
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

  const daysNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];



  setInterval(() => {
    var date = new Date();
    if (hours >= 12 && hours < 16) {
      this.displaymessage = 'Good Afternoon...!';
    } else if (hours >= 16) {
      this.displaymessage = 'Good Evening...!';
    } else if (hours < 12) {
      this.displaymessage = 'Good Morning...!';
    }

    this.hourdisplay = date.getHours();
    this.mindisplay = date.getMinutes();
    this.datedisplay = date.getDate();
    this.mondisplay = monthNames[date.getMonth()];
    this.yeardisplay = date.getFullYear();
    this.daydisplay = daysNames[date.getDay()];
    this.secdisplay = date.getSeconds();
    this.secdisplay =
      date.getSeconds() < 10
        ? '0' + date.getSeconds()
        : date.getSeconds() == 60
        ? '00'
        : date.getSeconds();
    this.hourdisplay =
      date.getHours() < 10
        ? '0' + date.getHours()
        : date.getHours() == 24
        ? '00'
        : date.getHours();
    this.mindisplay =
      date.getMinutes() < 10
        ? '0' + date.getMinutes()
        : date.getMinutes() == 60
        ? '00'
        : date.getMinutes();
    this.padispaly = date.getHours() > 12 ? 'PM.' : 'AM.';


  }, 10);


}

  /*------------------------------*/
/* Checkin Employee */
  /*------------------------------*/
  sdisplay:number | any = 0;
   mdisplay:number| any = 0;
  hdisplay: number | any  = 0;



date = new Date();
hour = this.date.getHours();
min = this.date.getMinutes();
sec = this.date.getSeconds();
displaymessage = '';

runnning: boolean = false;
checkinbtn:boolean = false;
checkoutbtn:boolean = false;
btnbreak:boolean = false;
  checkbtn: boolean = true
  mm: number = 0;
ss :number = 0;
  hr: number = 0;
ms?:number;
hourdisplay: any;
padispaly?: string;
  mindisplay?: any;
  secdisplay?: any;
daydisplay?: string;
yeardisplay?: number;
datedisplay?:  number | any;
mondisplay?: string;

checkedinTime:any;
checkedoutTime:any;
workinghour:any;

breaktext="";
checktext="CheckIn";

  secondslocal: any;
  minlocal: any;
  hourlocal: any;

startTimer() {
    setInterval(() => {
      if (!this.runnning) {
        
      const startTime = Date.now() 
       
      this.ss =  Date.now() - startTime; 
   
      this.sdisplay = this.ss
        this.ss++;


        this.secondslocal = localStorage.getItem('seconds')

        this.minlocal = localStorage.getItem('minutes')
        this.hourlocal = localStorage.getItem('hours')

        var convertsec = parseInt(this.secondslocal);
        var convertmin = parseInt(this.minlocal);
        var converthr = parseInt(this.hourlocal);
        this.sdisplay = convertsec + this.ss;

        this.hdisplay = converthr + this.hr;
        this.mdisplay = convertmin + this.mm;

        if (convertsec) {
  debugger
          if (this.sdisplay >= 60) {
            this.sdisplay =0 
            this.mdisplay++
          }
          
         
        }
        if (this.mdisplay >= 60) {  
          this.mdisplay =0  
          this.hdisplay++
        }
     
        if (this.hdisplay >= 24) {  
          this.hdisplay =0   
          this.hdisplay++
        }
        this.sdisplay = this.sdisplay < 10 ? '0' + this.sdisplay : this.sdisplay == 60 ? '00' : this.sdisplay
        this.mdisplay = this.mdisplay < 10 ? '0' + this.mdisplay : this.mdisplay == 60 ? '00' : this.mdisplay;
         this.hdisplay = this.hdisplay < 10 ? '0' + this.hdisplay : this.hdisplay == 24 ? '00' : this.hdisplay;
        localStorage.setItem('seconds', this.sdisplay || 0)
        localStorage.setItem('minutes', this.mdisplay || 0)
        localStorage.setItem('hours', this.hdisplay || 0)

    }
    },1000);
 

}
 check(){
   if (this.checktext == "CheckIn") {

   this.checkin()
  } else if(this.checktext !== "CheckIn"){
    
    var checkworkhours = localStorage.getItem('hours')  || 0;
    if (checkworkhours < 9){
     this.popup=true;
    } else{
      this.checkout()
    }
  }
 }
checkin(){
   
  localStorage.setItem('status','checkedIn')
  this.runnning = false;
  this.checkinbtn = true;
  this.startTimer();
  this.breaktext = "Take A Break"
  this.btnbreak = true;
   this.checktext = "CheckOut";
  this.checkedinTime = this.hourdisplay +  ":"  + this.mindisplay +  ":"  + this.secdisplay;
 // alert("Your Checked In Time ======"  + this.checkedinTime)
  this.toastr.success("Checked In at " + this.checkedinTime)
}
checkout(){
  this.checkedoutTime =  this.hourdisplay +  ":"  + this.mindisplay +  ":"  + this.secdisplay;
    this.toastr.error("Checked Out at "  + this.checkedoutTime)
    this.create();
    this.workinghour = this.hr + 'hr' +' : ' +this.mm +'mm' +' : ' + +this.ss +'sec',
    this.toastr.warning("Your Working Hours"  + this.workinghour)
    this.runnning = true;
    this.checkbtn =false;
    this.checkoutbtn = true;
    this.btnbreak = false;
    this.checktext = "CheckIn";
    localStorage.removeItem('seconds');
    localStorage.removeItem('minutes');
    localStorage.removeItem('hours');
    localStorage.removeItem('status');
    this.mm = 0;
    this.ss = 0;
    this.hr = 0;
}
break() {

  if(  this.breaktext == "Take A Break"){
    this.runnning = true;
    this.breaktext = "I am On"
  } else if(this.breaktext  !== "Take A Break"){
    this.runnning = false;
    this.breaktext = "Take A Break"

  }
}

 empname = localStorage.getItem("employeename");
 empid = localStorage.getItem("employeeId");
create(){
  let data = {
    date:this.date.toLocaleDateString(),
    employeename:this.empname,
    employeeid : this.empid,
    checkedin: this.checkedinTime,
    checkedout: this.checkedoutTime,
    working :  this.hr + 'hr' +' : ' +this.mm +'mm' +' : ' + +this.ss +'sec',

  }
 
  this._authservice.create(data).subscribe((res)=>{
   this.toastr.success(this.workinghour)
  //alert(this.workinghour)
  })
}

  /*------------------------------*/
          /*Early Checkout Reason*/
 /*------------------------------*/
 popup:boolean=false;
 reasonbox:boolean=false;


 earlycheckoutform = this.formbuilder.group({

  description:this.formbuilder.control('',Validators.required)

})


reason:any;
modal:boolean=true;
reasonsend(){
  let early = {
    date:this.date.toLocaleDateString(),
    EmployeeName: this.empname,
    label:'Reason For Early Checkout',
    description: this.earlycheckoutform.value.description,
  
  }
  this._authservice.notifications(early).subscribe(res=>{
    this.toastr.success("Successfully Submitted to HR")
    debugger
    this.reason = res;
    this.checkout()
    this.modal = false;
  })
}
informhr(){
  this.popup =false; this.modal =true
}
  /*------------------------------*/
  /*date of birth check*/
  /*------------------------------*/
dobcheck:any;

checkbirthday(){
  this._authservice.GetAllEmployees().subscribe((res)=>{
    this.dobcheck = res;

  })
 
}
  /*------------------------------*/
  /*holidays list*/
  /*------------------------------*/
holidaylists:any;
getholidayslist(){
  this._authservice.getholidays().subscribe((res)=>{
    this.holidaylists = res;

  })
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
    /*------------------------------*/
  /*Task list*/
  /*------------------------------*/
  tasklist:any;
   gettasklist(){
    this._authservice.viewtasklist().subscribe(res=>{
      this.tasklist = res;

    })
   }
    /*------------------------------*/
  /*Check Attendance list*/
  /*------------------------------*/
  attendance:any;
  markattendance(){
    this._authservice.getattendancebyid(localStorage.getItem("employeeId")).subscribe(res=>{
      this.attendance = res;
      console.log(this.attendance)
    })
  }
}
