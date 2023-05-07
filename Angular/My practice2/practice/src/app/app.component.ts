import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {UserInfoService} from './services/user-info.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  userDetails=[
    {name:'anndin',email:'nandini@gmail.com'},
    {name:'geeta',email:'kunmar@gmail.com'},
    {name:'shoba',email:'knuj@gmail.com'},
    {name:'meena',email:'nikunj@gmail.com'},
  ]
  updateData(item:string){
    console.log(item)
  }
  name:any;
  submitInfo(item:any){
    console.log(item)
  }
  loginForm = new FormGroup({
    user: new FormControl(''),
    password:new FormControl('')
  })
  usersdata:any;
  loginuser(){
    console.log(this.loginForm.value)
  }
  constructor(private user:UserInfoService){
    console.log("userdata",user);
    this.usersdata = user.users();
    console.log(this.usersdata);
  }
}

