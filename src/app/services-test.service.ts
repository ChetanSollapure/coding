import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesTestService {

  constructor() { }
 Tables(){
   return [
  {id:'1',emp_name:'Chetan',emp_email:'chetans799@gmail.com',phone_no:'9898984343',image:'../../assets/img/me.jpg'},
  {id:'2',emp_name:'Salil',emp_email:'rocky@gmail.com',phone_no:'9898984343',image:'../../assets/img/salya.jpg'},
  {id:'3',emp_name:'Gururaj',emp_email:'raajshowman@gmail.com',phone_no:'9898984343',image:'../../assets/img/gurya.jpg'},
  /*{id:'4',emp_name:'Gopal',emp_email:'gopal@gmail.com',phone_no:'9898984343',image:'../../assets/img/gopi.jpg'}*/
    ];
  }
}
