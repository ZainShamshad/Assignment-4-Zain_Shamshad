import { Injectable, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Blog } from '../models/blog';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  
  @Output('blogs') blogsEmitter:EventEmitter<Blog[]> = new EventEmitter<Blog[]>();

  constructor(private userService:UserService) { }


  public addBlog(blog:Blog){
    debugger
    blog.expanded = false;
    blog.setDate(new Date()+"");
    blog.setId(100+this.blogs.length);
    this.blogs.push(blog);
    this.blogsEmitter.emit(this.blogs);
  }

  public updateBlog(blog:Blog, index:number){
    this.blogs[index] = blog;
    this.blogsEmitter.emit(this.blogs);
  }

  public deleteBlog(index:number){
    this.blogs.splice(index,1);
  }

  blogs: Blog[]=[
    new Blog(
      101,
      "How to Use MATERIAL CARD In Angular",
      new Date()+"",
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\nThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\n\n\tThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\nThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\n\n\t",
      this.userService.users[Math.floor((Math.random() * this.userService.users.length) + 1)]
    ),
    new Blog(
      102,
      "How to Use NGX TOASTER In Angular",
      new Date()+"",
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\nThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\n\n\tThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\nThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\n\n\t",
      this.userService.users[Math.floor((Math.random() * this.userService.users.length) + 1)]
    ),
    new Blog(
      103,
      "How to Create a CUSTOM ATTRIBUTE DIRECTIVE In Angular",
      new Date()+"",
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\nThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\n\n\tThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\nThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\n\n\t",
      this.userService.users[Math.floor((Math.random() * this.userService.users.length) + 1)]
    ),
    new Blog(
      104,
      "Bananas have potassium?",
      new Date()+"",
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\nThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\n\n\tThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\nThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\n\n\t",
      this.userService.users[Math.floor((Math.random() * this.userService.users.length) + 1)]
    ),
    new Blog(
      105,
      "What are the tips to become a successful programmer",
      new Date()+"",
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\nThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\n\n\tThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\nThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\n\n\t",
      this.userService.users[Math.floor((Math.random() * this.userService.users.length) + 1)]
    ),
    new Blog(
      106,
      "A guide to develop work ethics",
      new Date()+"",
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\nThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\n\n\tThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\nThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\n\n\t",
      this.userService.users[Math.floor((Math.random() * this.userService.users.length) + 1)]
    )
  ]

}
