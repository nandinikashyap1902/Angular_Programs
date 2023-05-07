import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ChildComponent } from './child/child.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataSqrtPipe } from './data-sqrt.pipe';


import { HomComponent } from './hom/hom.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RedColDirective } from './red-col.directive';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    ChildComponent,
    DataSqrtPipe,
    HomComponent,
    AboutUsComponent,
    ContactUsComponent,
    RedColDirective,
  ],
  imports: [
    BrowserModule,
   ReactiveFormsModule,
   AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
