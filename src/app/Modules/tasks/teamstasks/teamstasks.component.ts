import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-teamstasks',
  templateUrl: './teamstasks.component.html',
  styleUrls: ['./teamstasks.component.css']
})
export class TeamstasksComponent {

  constructor(private authservice : AuthService){
    this.getteamtasks()
  }
  teamtasks:any;
  checkdepartment = localStorage.getItem('department')
  getteamtasks(){
    this.authservice.viewtasklist().subscribe(res=>{
      this.teamtasks = res;
  
        })
  }
}

