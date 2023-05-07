import { Component } from '@angular/core';
import { UserInfoService } from '../services/user-info.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  users:any;
constructor(private user:UserInfoService){
  console.log(user);
  this.users=user.users();
}
}
