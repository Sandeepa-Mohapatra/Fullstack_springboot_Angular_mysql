import { Component, OnInit } from '@angular/core';
import { UserServiceService } from  '../user-service.service';
import{ User } from '../user';
import { EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user : User=new User("","",0);
  message : any;

  bookname:string="";
  authorname:string="";
  price:number;
  successData:any;
  constructor(private service : UserServiceService , private http:HttpClient) { }

  ngOnInit(): void {
  }
  public registerNow()
  {
    var formdata:any=new FormData();
    formdata={
      bookname:this.bookname,
      authorname:this.authorname,
      price:this.price
    }
    console.log("my text field value =",formdata);
    // this.http.post('http://localhost:8080/add-book',formdata).subscribe((successData)=>{
    //   this.successData=successData;
    //   console.log("my data",successData);
      
    // })

   let response= this.service.doBookRegistration(formdata);
   response.subscribe(data=>{
     console.log("api hitted succesfully with ",data);
     this.message=data;
   })
  }

}
