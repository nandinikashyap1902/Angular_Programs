import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BarChartsComponent } from './bar-charts/bar-charts.component';
import { AreaLineChartsComponent } from './area-line-charts/area-line-charts.component';


@NgModule({
  declarations: [
    AppComponent,
    BarChartsComponent,
    AreaLineChartsComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
