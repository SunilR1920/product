import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupMainComponent } from './signup-main/signup-main.component';
import { LoginbtnComponent } from '../login/main/loginbtn/loginbtn.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SignupMainComponent,
    LoginbtnComponent,
    ReactiveFormsModule
  ]
})
export class SignupModule { }
