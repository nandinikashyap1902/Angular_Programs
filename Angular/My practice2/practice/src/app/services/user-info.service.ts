import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor() { }
  users(){
    return[
      {name:'NANDINI',age:56,email:'nandini@gmail.com'},
      {name:'kashyap',age:45,email:'kashyp@gmail.com'},
      {name:'shashi',age:78,email:'shashi@gmail.com'}
    ]
  }
}
