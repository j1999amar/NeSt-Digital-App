import { Component } from '@angular/core';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent {
  name=""
  friendNickName=""
  DescribeYourFriend=""
  readValue=()=>{
  let data:any={
    "name":this.name,
    "friendNickName":this.friendNickName,
    "DescribeYourFriend":this.DescribeYourFriend
    
  } 
  console.log(data)  
 }

}
