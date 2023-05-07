import { Component,OnInit } from '@angular/core';
import {productSales,productSalesMulti} from '../Data/products'
@Component({
  selector: 'app-area-line-charts',
  templateUrl: './area-line-charts.component.html',
  styleUrls: ['./area-line-charts.component.css']
})
export class AreaLineChartsComponent implements OnInit {
  productSales: any[] =[];
    productSalesMulti: any[] = [];
  
  constructor(){
    Object.assign(this,{productSales,productSalesMulti})
  }
  ngOnInit():void{
  }
  }
