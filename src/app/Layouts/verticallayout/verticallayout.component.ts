import { Component, OnInit,DoCheck } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-verticallayout',
  templateUrl: './verticallayout.component.html',
  styleUrls: ['./verticallayout.component.css']
})
export class VerticallayoutComponent  implements OnInit , DoCheck{
showmenu:boolean=false;

  constructor(private _authservice : AuthService){

    
  }
  ngOnInit(): void {

  }
  ngDoCheck(): void{
    if(this._authservice.IsLoggedIn()){
      this.showmenu = true;
 
    } else{
      this.showmenu = false;
   
    }
  }
}
