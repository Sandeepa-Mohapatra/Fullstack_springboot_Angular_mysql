import { Component, OnInit } from '@angular/core';
import { UserServiceService } from  '../user-service.service';
import{ User } from '../user';
import { EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Bookuser } from '../Bookuser';

@Component({
  selector: 'app-impelsyslibrary',
  templateUrl: './impelsyslibrary.component.html',
  styleUrls: ['./impelsyslibrary.component.scss']
})
export class ImpelsyslibraryComponent implements OnInit {
  user : User=new Bookuser("","","","");
  message : any;

  username:string="";
  firstname:string="";
  lastname:string="";
  password:string="";
  successData:any;
  constructor(private service : UserServiceService , private http:HttpClient) { }

  ngOnInit(): void {
  }
  public registerUserNow()
  {
    var formdata:any=new FormData();
    formdata={
      username:this.username,
      firstname:this.firstname,
      lastname:this.lastname,
      password:this.password
    }
    console.log("my text field value =",formdata);
    // this.http.post('http://localhost:8080/add-book',formdata).subscribe((successData)=>{
    //   this.successData=successData;
    //   console.log("my data",successData);
      
    // })

   let response= this.service.doUserRegistration(formdata);
   response.subscribe(data=>{
     console.log("api hitted succesfully with ",data);
     this.message=data;
     
   })
  }

}
