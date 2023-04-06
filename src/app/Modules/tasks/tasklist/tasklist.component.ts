import { Component ,OnInit,ViewChild} from '@angular/core';
import { FormBuilder ,Validators,FormControl} from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {


  constructor(private authservice : AuthService,   private formbuilder : FormBuilder){
     this.gettasklist()
  }
  tasklist:any;
  gettasklist(){
    this.authservice.viewtasklist().subscribe(res=>{
      console.log(res)
      this.tasklist = res
    })
  }

  taskform = this.formbuilder.group({
    id:this.formbuilder.control(''),
    description: this.formbuilder.control(''),

   })
   date = new Date();
   tasksubmit:any;
   empname = localStorage.getItem("employeename");
   empid = localStorage.getItem("employeeId");
   team = localStorage.getItem("department");
   empdata:any;


   taskupdate(){
    let data = {
      date:this.date.toLocaleDateString(),
      time:this.date.getTime(),
      EmployeeName: this.empname,
      employeeId: this.empid,
      description: this.taskform.value.description,
      team :this.team
    }
    this.authservice.inserttasklist(data).subscribe(res=>{
      this.tasksubmit = res;
      this.gettasklist()
    })
   }
  


}
