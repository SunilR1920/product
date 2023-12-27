import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { SignupModule } from './signup/signup.module';
// import { MaterialUIComponent} from '@angular/material';


@NgModule({
    imports:[
        BrowserModule,
        AppComponent,
        
        FormsModule,
        ReactiveFormsModule,
        SignupModule,
        // MaterialUIComponent
    ],
    providers: [],
//   bootstrap: [AppComponent]

})

export class AppModule {}