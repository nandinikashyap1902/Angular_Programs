import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {HomComponent} from './hom/hom.component'
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
const routes:Routes=[
  {
    path:'hom/:id',
    component:HomComponent},
    {
      path:'child',
      component:ChildComponent},
      {
        path:'user',
        component:UserDetailsComponent,
        children:[{path:'about',component:AboutUsComponent},{
          path:'userinfo',component:UserDetailsComponent
        }]
      },
        {
          path:'**',
          component:ContactUsComponent
        }
];
@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
