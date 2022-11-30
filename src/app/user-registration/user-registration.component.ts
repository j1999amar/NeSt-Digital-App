import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  constructor( private route:Router ){}
  empname=""
  empId=""
  firstName=""
  lastName=""
  houseNo=""
  houseName=""
  streetName=""
  pincode=""
  district=""
  state=""
  country=""
  mobile=""
  email=""
  parrentName=""
  gender=""
  degree=""
  exp=""
  joining=""
  username=""
  password=""
  confrimPassword=""

  readValue=()=>{
    if(this.password==this.confrimPassword){
      this.route.navigate(['/userLogin'])
    }else{
      alert("Login Failed")
      this.empname=""
      this.empId=""
      this.firstName=""
      this.lastName=""
      this.houseNo=""
      this.houseName=""
      this.streetName=""
      this.pincode=""
      this.district=""
      this.state=""
      this.country=""
      this.mobile=""
      this.email=""
      this.parrentName=""
      this.gender=""
      this.degree=""
      this.exp=""
      this.joining=""
      this.username=""
      this.password=""
      this.confrimPassword=""
    }
  }






}
