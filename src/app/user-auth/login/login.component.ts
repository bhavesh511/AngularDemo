import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // getButton(name: any) {
  //   alert(name);
  // }

  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(4)])
  })

  loginUser() {
    console.warn(this.loginForm.value);    
  }

  get user(){
    return this.loginForm.get('user');
  }

  get password(){
    return this.loginForm.get('password');
  }

}
