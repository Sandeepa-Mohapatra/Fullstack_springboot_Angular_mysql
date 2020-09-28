import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AllUsersComponent,DialogData } from '../all-users/all-users.component';
import { UserServiceService } from  '../user-service.service';

@Component({
  selector: 'app-updatecomponent',
  templateUrl: './updatecomponent.component.html',
  styleUrls: ['./updatecomponent.component.scss']
})

export class UpdatecomponentComponent implements OnInit {
data1:any;
users : any;
  constructor(
    private sevice:UserServiceService ,
    public dialogRef: MatDialogRef<AllUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      console.log(this.data);
      
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  public updateBookName(users)
  {
    console.log(users);
    
    let response=this.sevice.updateBookbyName(users);
    response.subscribe(data=>this.users=data);
  }
  ngOnInit(): void {
    this.data1=this.data;
    console.log(this.data1);
    
  }

}
