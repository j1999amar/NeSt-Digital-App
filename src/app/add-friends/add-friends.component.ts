import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent {
  constructor(private api:ApiService){}
  name=""
  friendNickName=""
  DescribeYourFriend=""
  readValue= () =>
  {
   let data:any={
    "name":this.name,
    "friendNickName":this.friendNickName,
    "DescribeYourFriend":this.DescribeYourFriend
   }
   this.api.addFriendData(data).subscribe(
    (response:any)=>{
      console.log(response)
      if(response.status=="success"){
        alert("Added")
        this.name=""
        this.friendNickName=""
        this.DescribeYourFriend=""
      }else{
        alert("invalid ")
      }

    }
   )
  }

}
