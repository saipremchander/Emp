import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { checkin } from '../interface/checkin.interface';
import { employee } from '../interface/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http : HttpClient) {
  
   }
 apiurl ="http://localhost:3000/employee";
roleapiurl ="http://localhost:3000/role"
   GetAllEmployees():Observable<employee[]>{
    return this._http.get<employee[]>(this.apiurl)
   }

   GetEmployeebyId(id:any){

    return this._http.get<employee[]>(this.apiurl+'/'+ id)
   }
   
   InsertEmployee(inputdata:any){
    return this._http.post<employee[]>(this.apiurl,inputdata)
   }
   UpdateEmployee(id:any,inputdata:any){
    return this._http.put<employee[]>(this.apiurl+'/'+ id,inputdata)
   }
   IsLoggedIn(){
    return localStorage.getItem('employeename') != null;
   }
   Getrole(){
 return localStorage.getItem('role') !=null;
   }
 
   GetAllroles(){
    return this._http.get('http://localhost:3000/role')
   }


 
  create(data: any) {
    debugger
    return this._http.post('http://localhost:3000/checkins', data);
  }
 

   getcheckindata(){

    return this._http.get('http://localhost:3000/checkins')
   }
  /* Attendance of Employee (HR) */

  getattendance(){
    return this._http.get<employee[]>('http://localhost:3000/checkins');
  }
   postattendance(inputdata:any){
    return this._http.post('http://localhost:3000/empattendance',inputdata)
   }

  /* holidays api */
  getholidays(){
    return this._http.get('http://localhost:3000/holidays')
  }
 
  postholiday(data:any){
    return this._http.post('http://localhost:3000/holidays',data)
  }

  deleteholiday(id?:any){
       return this._http.delete('http://localhost:3000/holidays'+'/'+ id)
  }
  /*Notifications Checkout */
  notifications(early:any){
    return this._http.post('http://localhost:3000/notifications',early)
   }

   getnotification(){
    return this._http.get('http://localhost:3000/notifications')
   }

   /*Task list */

   inserttasklist(data:any){
    return this._http.post('http://localhost:3000/tasklist',data)
   }
   viewtasklist(){
    return this._http.get('http://localhost:3000/tasklist')
   }

   /* Attendance */

   getattendancebyid(id?:any){
    return this._http.get('http://localhost:3000/empattendance'+'/'+ id)
   }
 
}
