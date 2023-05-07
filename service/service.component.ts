import { Component } from '@angular/core';
import { UserdetailsService } from '../services/userdetails.service';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  details:any;
constructor(private user:UserdetailsService){
console.log(user)
this.details=user.user()
}
}
