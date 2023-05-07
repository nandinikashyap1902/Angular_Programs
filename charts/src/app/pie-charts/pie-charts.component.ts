import { Component,OnInit } from '@angular/core';
import {productSales,productSalesMulti} from '../Data/products'
@Component({
  selector: 'app-pie-charts',
  templateUrl: './pie-charts.component.html',
  styleUrls: ['./pie-charts.component.css']
})
export class PieChartsComponent implements OnInit {
  productSales: any[] =[];
    productSalesMulti: any[] = [];
  
  constructor(){
    Object.assign(this,{productSales,productSalesMulti})
  }
  ngOnInit():void{
  }

}
