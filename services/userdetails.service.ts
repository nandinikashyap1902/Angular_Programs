import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  constructor() { }
  user(){
    return[
      {name:'nandini',id:2,pass:'buhu'},
      {name:'kashyap',id:5,pass:'nkijk'},
      {name:'developer',id:6,pass:'cfcg'}
    ]
  }
}
