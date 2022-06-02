import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  constructor(private fb:FormBuilder) {}
  
    ngOnInit():void {
      this.createForm()
    } 
  createForm(){
    this.loginForm = this.fb.group({
      email:[''],
      password:['']
    })
  }
  singin(){
    console.log("values", 'email', this.loginForm.value.email, 
                 'password', this.loginForm.value.password)  // this is for console getting email and password.
  }
createAccount(){

}
  }

