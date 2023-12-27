import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignupMainComponent } from './signup/signup-main/signup-main.component';
import { MainComponent } from './login/main/main.component';


export const routes: Routes = [
    {
        path:'register',
        component: SignupMainComponent
    },
    {
        path:'login',
        component: MainComponent
    },
    {
        path:'',
        component: MainComponent
    }
];


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

