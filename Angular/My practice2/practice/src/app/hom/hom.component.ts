import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hom',
  templateUrl: './hom.component.html',
  styleUrls: ['./hom.component.css']
})
export class HomComponent implements OnInit {
  userId:any;
constructor(private route:ActivatedRoute){}
ngOnInit():void{
  console.log("user id is",this.route.snapshot.paramMap.get('id'));
  this.userId=this.route.snapshot.paramMap.get('id');
}
}
