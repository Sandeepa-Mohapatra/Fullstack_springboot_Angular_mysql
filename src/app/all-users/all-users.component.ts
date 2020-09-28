import { Component, OnInit } from '@angular/core';
import { UserServiceService } from  '../user-service.service';
import{ User } from '../user';
import { HttpClient } from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import { UpdatecomponentComponent } from '../updatecomponent/updatecomponent.component';
import { from } from 'rxjs';
export interface DialogData {
  array: Array<any>;
  
}
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})

export class AllUsersComponent implements OnInit {

  users : any;
  bookusers:any;
  bookdata : any;
  bookname:string="";
  authorname:string="";
  price:number;

  
  constructor(private sevice:UserServiceService , private http:HttpClient, public dialog: MatDialog) { }

  ngOnInit()
  {
    let response=this.sevice.getAllBooks();
    response.subscribe(data=>this.users=data);
    let response1=this.sevice.getAllUsers();
    response1.subscribe(data=>this.bookusers=data);
  }
  public removeBook(bookname:string)
  {
     let response=this.sevice.deleteBookbyName(bookname);
     response.subscribe(data=>this.users=data);
  }
  public assign(bookuser:string)
  {
    console.log(bookuser);
    
  }
  updateBook(data): void {
    const dialogRef = this.dialog.open(UpdatecomponentComponent, {
      width: '250px',
      data: {data}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  // public bookDetails(book)
  // {
  //   var formdata:any=new FormData();
  //   formdata={
  //     bookname:book.bookname,
  //     authorname:book.authorname,
  //     price:book.price
  //   }
  //   console.log("book ="+formdata);
  //   this.bookdata=formdata;
  //   console.log("book data = "+this.bookdata);
  // }

}
