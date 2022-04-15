import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { ChangePasswordComponent } from './change-password/change-password.component';
import { JwtInterceptor } from './jwt.interceptor';

const routerList:Routes=[
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:'search-user',component:SearchUserComponent},
  {path:'change-password',component:ChangePasswordComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent, 
    LoginComponent, SearchUserComponent, ChangePasswordComponent
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
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
