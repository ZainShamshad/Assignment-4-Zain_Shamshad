import { Component, Input, OnInit,EventEmitter,Output, SimpleChanges, OnChanges } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { CreateBlogComponent } from '../create-blog/create-blog.component';
import { Blog } from '../models/blog';
import { User } from '../models/user';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnChanges {

  filteredBlogs:any = []

  public user:User=new User();
  public bullet:string = "\u2022";
  public search:string = "";
  public blogsTotal:number = 0;
  constructor(
    private dialog: MatDialog,
    private blogService: BlogService
    ) {
  }
  
  ngOnInit(): void {
    this.filteredBlogs = this. blogService.blogs;
    this.blogsTotal = this.filteredBlogs.length;
  }

  ngOnChanges(simpleChanges:SimpleChanges){
    this.blogService.blogsEmitter.subscribe(res =>{
      this.filteredBlogs = res;
      this.blogsTotal = res.length;
    });
  }

  @Input('user') set setUser(user:User){
    this.user=user;
  }

  public edit(index:number):void{
    this.openDialog(this.filteredBlogs[index],index);
  }

  openDialog(blog:Blog, index:number): void {
    const dialogRef = this.dialog.open(CreateBlogComponent, {data:{blog:blog, index:index, user:this.user}});
    
    // const dialogSubmitSubscription = dialogRef.componentInstance.published.subscribe(result => {

    //   dialogSubmitSubscription.unsubscribe();
    // });

    dialogRef.afterClosed().subscribe(result => {});
  }


  public searchBlogs():void{
    this.filteredBlogs = this. blogService.blogs.filter(s => s.getTitle().toLowerCase().includes(this.search.toLowerCase()));
  }

  public seeAction(i:number):void {
    this.filteredBlogs[i].expanded = !this.filteredBlogs[i].expanded;
  }

  public getAction(i:number):string{
    if(this.filteredBlogs[i].expanded){
      return "see less";
    }
    return "see more";
  }


}
