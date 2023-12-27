import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModelGroup, Validators } from '@angular/forms';
import { InputfieldComponent } from '../../login/main/inputfield/inputfield.component';
import { LoginbtnComponent } from '../../login/main/loginbtn/loginbtn.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup-main',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputfieldComponent,
    LoginbtnComponent,
  ],
  templateUrl: './signup-main.component.html',
  styleUrl: './signup-main.component.css'
})
export class SignupMainComponent {
  firstNamePlaceholder:string ="First Name";
  firstNameValue:string ="firstName"; 
  lastNamePlaceholder:string ="Last Name";
  lastNameValue:string ="lastName";

  emailPlaceholder:string="Enter your email";
  emailValue:string="email"
  mobileNoPlaceholder:string="Mobile No.";
  mobileNoValue:string="mobileNo";

  type:string="radio";
  forMaleGender:string="Male";
  gender:string="gender";
  forFemaleGender:string="Female";
  

  addressPlaceholder:string="Address";
  addressValue:string="address";
  cityPlaceholder:string="City";
  cityValue:string="city";
  regionPlaceholder:string="Region";
  regionValue:string="region";
  pincodePlaceholder:string="Pincode";
  pincodeValue:string="pincode";
  countryPlaceholder:string="Country";
  countreyValue:string="countrey";

  useridPlaceholder:string="User ID";
  useridValue:string="userid";
  passwordPlaceholder:string="Password";
  passwordValue:string="password";
  conPasswordPlaceholder:string="Confirm Password";
  conPasswordValue:string="conPassword";
  roleValue:string="role";

  buttonTitle:string="Register";

  displayAddress=false;
  showAddress(){
    this.displayAddress=true;
  }
  addressTextareaRows:number=1;
  minColsForIncrease:number=30;
  onAddressTextareaInput(event:any){
    const currentCols = event.target.cols;
    if(currentCols> this.minColsForIncrease){
      const numberRows = Math.ceil(event.targt.vlaue.lenth/currentCols);
      this.addressTextareaRows=numberRows;
    }
  }

  userRegisterData:any={};
  getRegistretionFormValue(){
    console.log(this.RegistretionForm.value)
  }

  RegistretionForm= new FormGroup({
    firstNameValue: new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z]+$')]),
    lastNameValue: new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z]+$')]),
    emailValue: new FormControl('',[Validators.required,Validators.minLength(6),Validators.email]),
    mobileNoValue: new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]+$')]),
    gender: new FormControl([Validators.required]),
    addressValue: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9]+$')]),
    cityValue: new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z]+$')]),
    regionValue: new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z]+$')]),
    pincodeValue: new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('[0-9]+$')]),
    countreyValue: new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z]+$')]),
    useridValue: new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9]+$')]),
    passwordValue: new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9]+$')]),
    conPasswordValue: new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9]+$')]),
    roleValue: new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z]+$')])
  })
}
