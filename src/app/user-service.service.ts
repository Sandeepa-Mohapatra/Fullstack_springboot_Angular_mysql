import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient) { }
  public doBookRegistration(user)
  {
    return this.http.post("http://localhost:8080/add-book",user,{responseType:"text" as "json"});
  }
  public getAllBooks()
  {
    return this.http.get("http://localhost:8080/all-book");
  }
  public searchBookByBookName(bookname)
  {
    return this.http.get("http://localhost:8080/bookname/"+bookname);
  }
  public deleteBookbyName(bookname)
  {
    return this.http.get("http://localhost:8080/delete/"+bookname);
  }
  public updateBookbyName(user)
  {
    return this.http.put("http://localhost:8080/update/",user,{responseType:"text" as "json"});
  }
  public doUserRegistration(user)
  {
    return this.http.post("http://localhost:8080/add-user",user,{responseType:"text" as "json"});
  }
  public getAllUsers()
  {
    return this.http.get("http://localhost:8080/all-users");
  }
}
