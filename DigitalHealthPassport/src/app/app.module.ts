import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchUserComponent } from './search-user/search-user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CovidTestDetailsComponent } from './covid-test-details/covid-test-details.component';

const routerList:Routes=[
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:'search-user',component:SearchUserComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'covid-test-details',component:CovidTestDetailsComponent}
  
]



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent, 
    LoginComponent, SearchUserComponent,
    ForgotPasswordComponent,
    CovidTestDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routerList),
    FormsModule,
ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
