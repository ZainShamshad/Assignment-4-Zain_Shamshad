import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { CreateBlogComponent } from '../create-blog/create-blog.component';
import { Blog } from '../models/blog';
import { User } from '../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  public user:User=new User();
  public bullet:string = "\u2022";
  public activeItem:string = "LOGIN";

  @Input('user') set setUser(user:User){
    this.user=user;
    if(user.getUsername().length>0){
      this.itemSelected("BLOG");
    }
  }

  @Output()  headercomp:EventEmitter<string> = new EventEmitter<string>();

  constructor(private dialog: MatDialog) { }

  openDialog(): void {

    const dialogRef = this.dialog.open(CreateBlogComponent, {data: {blog:new Blog(undefined), index: -1, user:this.user}});
    dialogRef.afterClosed().subscribe(result => {});
  }

  itemSelected(item:string){
    this.activeItem = item;
    // debugger
    if(item === "CREATEBLOG"){
      item = "BLOG";
      this.openDialog();
      return;
    }

    this.headercomp.emit(item);
  }

  public isActive(item:string):boolean{
    return this.activeItem === item;
  }
  
  public isInactive(item:string):boolean{
    return !(this.activeItem === item);
  }
}
