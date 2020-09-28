import { Component, OnInit } from '@angular/core';
import { UserServiceService } from  '../user-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  bookname : string="";
  users : any;
  constructor(private service : UserServiceService) { }

  ngOnInit(): void {
  }

  public findByBookName()
  {
    let response=this.service.searchBookByBookName(this.bookname);
    // response.subscribe(data=>this.users=data);
    console.log("my data",this.bookname);
    response.subscribe(data=>{
      console.log("api hitted succesfully with ",data);
      this.users=data;
      console.log("api hitted succesfully with ",this.users);
    })
  }
}
