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
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { ViewFriendComponent } from './view-friend/view-friend.component';
import { ViewNavbarComponent } from './view-navbar/view-navbar.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
const myRouter:Routes=[
  {
    path:'',
    component:NavbarComponent
  },

  {
  path:'adminLogin',
  component:AdminLoginComponent
},
{
  path:'userLogin',
  component:UserLoginComponent,
},
{
  path:'userRegistration',
  component:UserRegistrationComponent
},
{
  path:'adminPage',
  component:AdminPageComponent
},{
  path:'addCourse',
  component:AddCourseComponent
},
{
  path:'addFriend',
  component:AddFriendsComponent
},
{
  path:'userPage',
  component:EmployeePageComponent
},
{
  path:'viewCourse',
  component:ViewCourseComponent
},
{
  path:'viewFriend',
  component:ViewFriendComponent
},
{
  path:'exit',
  component:AdminLoginComponent
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
    AdminNavbarComponent,
    AdminPageComponent,
    ViewCourseComponent,
    ViewFriendComponent,
    ViewNavbarComponent,
    EmployeePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forChild(myRouter),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
