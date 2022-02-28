import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CreateUserComponent } from '../create-user/create-user.component';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{

  constructor(private dialog: MatDialog,
    private toastr: ToastrService,
    private userService: UserService
  ) {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateUserComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
    
    //   const dialogSubmitSubscription = 
    //   dialogRef.componentInstance.published.subscribe(result => {

    //     // this.headerBlog.emit(
    //     //   {
    //     //     title: result.title,
    //     //     details: result.details,
    //     //     index: result.index
    //     //   }
    //     // );

    //     // alert(result.title+"\n"+result.index+"\n"+result.details);
    //     dialogSubmitSubscription.unsubscribe();
    // });
  }

  title:string = "Forgot";
  subtitle:string = " Username/ Password?";
  welcome:string = "";
  username:string ="";

  //setter to notify on value change
  @Input('appsends') set input(value: string) {
    this.welcome = value;
  }

  @Output('user') user:EventEmitter<User> = new EventEmitter<User>();;

  ngusername:string = "";
  ngpassword:string = "";

  login() {
    console.log("login");
    this.userService.logUsers();
    if(this.ngusername.length<1 || this.ngpassword.length<1){
      this.showRequired();
      return;
    }

    let userFound = false;

    for(let index=0; index<this.userService.users.length; index++){
      // debugger
      let un = this.userService.users[index].getUsername();
      console.log(un);
      if( un ===this.ngusername){

        userFound = true;

        if(this.userService.users[index].getPassword()===this.ngpassword){
          this.ngusername = this.ngpassword = "";
          this.userService.users[index].flags=0;
          this.showSuccess();
          this.welcome =("W E L C O M E "+" \u2022 "+this.userService.users[index].getUsername().toUpperCase());
          this.user.emit(this.userService.users[index]);
          break;
        }
        else{
          this.userService.users[index] = this.flagFailure(this.userService.users[index]);
          break;
        }
      }
    }

    if(!userFound){
      this.showUnregistered();
    }
  }


  create(){
    this.openDialog();
  }

  flagFailure(user:any): any{
    if(user.falgs<3){
      user.falgs++;
      this.showFailure();
    }
    else if(user.falgs==3){
      if(!user.blocked){
        user.blocked = true;
      }
      this.showBlocked();
    }
    return user;
  }

  showRequired() {
    this.toastr.info("Please Enter username and password first","Required*");
  }

  showSuccess() {
    this.toastr.success('Login Successfull!', 'Congratulations!');
  }

  showFailure() {
    this.toastr.error('Login Failed!', 'Invalid Credentials!');
  }

  showBlocked() {
    this.toastr.warning('User Not Allowed!', 'Account Blocked!');
  }

  showUnregistered() {
    this.toastr.info('User Not Found!', 'Username is not recognised!');
  }

}
