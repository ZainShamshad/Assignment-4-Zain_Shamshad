import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private userService:UserService,
    public dialogRef: MatDialogRef<CreateUserComponent>,
    private toastr:ToastrService
    ) { }

  ngOnInit(): void {
  }

  username:string = "";
  password:string = "";

  create(){
    let userCheck = false, passCheck = false;

    if(this.username !== undefined) {
      if(this.username !== null){
        if(this.username.length > 0){
          for(let user of this.userService.users){
            if(user.getUsername() === this.username){
              this.toastr.info("User with username: "+this.username+" already exists.","USERNAME NOT AVAILABLE!");
              return;
            }
          }
          userCheck = true;
        }
      }
    }

    if(!userCheck){
      this.toastr.error("Please enter valid username first.","USERNAME REQUIRED!");
      return;
    }
    
    if(this.password !== undefined) {
      if(this.password !== null){
        if(this.password.length > 0){
          passCheck = true;
        }
      }
    }

    // debugger
    if(userCheck && passCheck) {
      this.userService.addUser(
        new User(
          (this.userService.users.length+1),
          this.username,
          this.username+"@gmail.com",
          this.password,
          "",
          undefined,
          false,
          0
        )
      );
      this.toastr.success("user has been registered successfully","ACCOUNT CREATED!");
      this.userService.logUsers();
      this.dialogRef.close();
    }

    if(!passCheck) {
      this.toastr.error("Please type valid password","INVALID PASSWORD");
    }
  }

}
