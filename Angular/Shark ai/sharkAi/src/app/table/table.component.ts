import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  a:number[]=[1,2,3,4,5,6,6];
showinfo(){
 console.log("jii")
}
}
