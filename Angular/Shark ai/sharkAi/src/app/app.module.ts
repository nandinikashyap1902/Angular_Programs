import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Div1Component } from './div1/div1.component';
import { Div2Component } from './div2/div2.component';
import {MatIconModule} from '@angular/material/icon';
import { TableComponent } from './table/table.component'
@NgModule({
  declarations: [
    AppComponent,
    Div1Component,
    Div2Component,
    TableComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
