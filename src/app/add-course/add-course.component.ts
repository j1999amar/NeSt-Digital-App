import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  constructor(private api:ApiService){  }
  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""
  readValue=()=>{
    let data:any={
      "courseTitle":this.courseTitle,
      "courseDescription":this.courseDescription,
      "courseDuration":this.courseDuration ,
      "courseDate":this.courseDate,
      "courseVenue":this.courseVenue
     }
     console.log(data)
     this.api.addCourseDAta(data).subscribe(
      (response:any)=>{
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
