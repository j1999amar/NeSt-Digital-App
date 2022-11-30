import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor( private route:Router ){}

  EmpUsername=""
  EmpPassword=""
readValue=()=>{
  if(this.EmpUsername=="1122"&&this.EmpPassword=="12345"){
    this.route.navigate(['/adminPage'])  
  }else{
    alert("Login Failed")
    this.EmpUsername=""
    this.EmpPassword=""
  }

}
}
