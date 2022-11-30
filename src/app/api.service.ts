import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchCourseData =()=>{
    return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
  }
  addCourseDAta=(dataToSend:any)=>{
    return this.http.post("https://mylinkurcodesapp.herokuapp.com/addcourse",dataToSend)
  }
  fetchFriendData=()=>{
    return this.http.get('https://dummyapifriends.herokuapp.com/view')
  }
  addFriendData=(postData:any)=>{
    return this.http.post('https://dummyapifriends.herokuapp.com/adddata',postData)
  }
}
