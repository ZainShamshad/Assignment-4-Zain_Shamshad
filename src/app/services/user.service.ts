import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public addUser(user:User){
    debugger
    if(user !== undefined){
      this.users.push(user);
    }
  }

  public updateUser(user:User, index:number){
    this.users[index] = user;
  }

  public deleteUser(index:number){
    this.users.splice(index,1);
  }

  public blockUser(username:string){
    for(let i=0; i<this.users.length;i++){
      if(username === this.users[i].getUsername()){
        this.users[i].setBlocked(true);
        break;
      }
    }
  }

  public logUsers(){
    console.log("log users");
    for(let i=0; i<this.users.length;i++){
      console.log(this.users[i]);
    }
  }
  
  public updateFlags(username:string){
    for(let i=0; i<this.users.length;i++){
      if(username === this.users[i].getUsername()){
        this.users[i].flags++;
        if(this.users[i].flags === 3){
          this.users[i].setBlocked(true);
        }
        break;
      }
    }
  }

  users: User[] = [
    new User(1,"Zain","zs@gmail.com","123","Junior Consultant - App Development",undefined,false,0),
    new User(2,"Hammad","he@gmail.com","123","Consultant - App Development",undefined,false,2),
    new User(3,"Ali","ah@gmail.com","123","Junior Consultant - App Development",undefined,true,0)
  ]; 

}
