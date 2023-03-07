import { Component } from '@angular/core';
import {BlogService} from "../blog.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogs:any;
  constructor(private blog:BlogService) {}
  ngOnInit(){
    this.blog.getBlog().subscribe(data =>{
      this.blogs=data;
      console.log(data)
    })
  }
  reload(){
    window.location.reload();
  }
}
