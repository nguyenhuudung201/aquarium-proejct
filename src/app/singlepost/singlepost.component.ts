import { Component } from '@angular/core';
import {BlogService} from "../blog.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent {
  singleposts:any;
  constructor(private singlepost:BlogService , private fb:FormBuilder) {}
  ngOnInit(){
    this.singlepost.getSinglePost().subscribe(data =>{
      this.singleposts=data;
      console.log(data)
    })
  }
  infoUser=this.fb.group({
    "email":["",[Validators.required,Validators.email]],
    "name":["",[Validators.required]],
    "Subject":["",[Validators.required]],
    "phone":["",[Validators.required]],
    "message":["",[Validators.required]],
  })
  get f(){
    return this.infoUser.controls
  }
  onSubmit(value:any):void{
    console.log(value);
    alert("Thank you! Form submitted successfully. ")
  }
}
