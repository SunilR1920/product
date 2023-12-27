import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InputfieldComponent } from './inputfield/inputfield.component';
import { LoginbtnComponent } from './loginbtn/loginbtn.component';




@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    InputfieldComponent,
    LoginbtnComponent
  ],
  
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent{
  userIdValue:string='userid';
  userIdPlaceholder:string='Enter your user Id';

  passwordValue:string='password';
  passwordPlaceholder:string='Enter your password';

  buttonTitle:string='Login';

  loginForm = new FormGroup({
    userid:new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9]+$')]),
    password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9]+$')])
  });

  ngOnInit(){
    
  }
  
  getLoginForm(){
    console.log(this.loginForm.value);
  }

  get userid(){
    return this.loginForm.get('userid');
  }
  
  get password(){
    return this.loginForm.get('password');
  }
}
