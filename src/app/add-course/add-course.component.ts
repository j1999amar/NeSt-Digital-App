import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  constructor(private api:ApiService){}
  name=""
  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""
  readValue= () => {
   let values={
    "courseTitle":this.courseTitle,
    "courseDescription":this.courseDescription,
    "courseDuration":this.courseDuration ,
    "courseDate":this.courseDate,
    "courseVenue":this.courseVenue
   }
   console.log(values)
   this.api.addCourseDAta(values).subscribe(
    (response:any)=>{
      console.log(response)
      if(response.status=="success"){
        alert("Added Successfully")
        this.courseTitle=""
        this.courseDescription=""
        this.courseDuration=""
        this.courseDate=""
        this.courseVenue
      }else{
        alert("Something Went Wrong")
      }
    }
   )
  }
}
