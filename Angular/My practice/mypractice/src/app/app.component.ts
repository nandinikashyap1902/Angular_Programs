import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mypractice';
  count = 'red'
  value1 = ''
  condition = 'blue'
  show = true
  users =[1,2,3,4,5]
  printvalue(){
  this.count = "yellow"
  }
  displayprop(value:any){
    console.log(value);
    this.value1 = value;
  }
  toggleinfo(){
  this.show = !this.show
  }
  submitInfo(data:any){
    console.log(data)
  }
}
