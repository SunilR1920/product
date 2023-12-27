import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main/main.component';
import { InputfieldComponent } from './main/inputfield/inputfield.component';
import { LoginbtnComponent } from './main/loginbtn/loginbtn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    MainComponent,
    InputfieldComponent,
    LoginbtnComponent,
    FormsModule,
    ReactiveFormsModule,
    FormGroup,
    FormControl
  ],
  exports:[
    MainComponent
  ]
})
export class LoginModule { }
