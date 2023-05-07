import { Component, OnInit } from '@angular/core';
import {productSales,productSalesMulti} from '../Data/products'
@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.css']
})
export class BarChartsComponent implements OnInit {
productSales: any[] =[];
  productSalesMulti: any[] = [];

constructor(){
  Object.assign(this,{productSales,productSalesMulti})
}
ngOnInit():void{
}
}
