import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  loginForm = new FormGroup({
    name:new FormControl(''),
    pass:new FormControl('')
  })
  submitInfo(){
    console.log(this.loginForm.value)
  }
}
