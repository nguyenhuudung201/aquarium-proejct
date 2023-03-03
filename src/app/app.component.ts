import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aquarium';
  constructor(private fb:FormBuilder) {
  }
  infoUser=this.fb.group({
    "email":["",[Validators.required,Validators.email]],
  })
  get f(){
    return this.infoUser.controls
  }
  onSubmit(value:any):void{
    console.log(value);
    alert("Thank you! Form submitted successfully. ")
  }
}
