import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
const myRouter:Routes=[{
  path:'',
  component:AdminLoginComponent
},
{
  path:'userLogin',
  component:UserLoginComponent,
},
{
  path:'userRegistration',
  component:UserRegistrationComponent
}]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    AddCourseComponent,
    AddFriendsComponent,
    AdminNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
