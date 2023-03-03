import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {EventService} from "../event.service";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  events:any;
  constructor(private event:EventService,private fb:FormBuilder) {}
  ngOnInit(){
    this.event.getEvent().subscribe(data =>{
      this.events=data;
      console.log(data)
    })
  }
 x:any={
   email:"",
   name:"",
   event:"",
   phone:"",
   num:0,
 }
  infoUser=this.fb.group({
    "email":["",[Validators.required,Validators.email]],
    "name":["",[Validators.required]],
    "event":["",[Validators.required]],
    "phone":["",[Validators.required]],
    "num":[0,[Validators.required]],
  })

  get f(){
    return this.infoUser.controls
  }
  plushNum(){
    this.fb.group('num')
  }
  minusNum(){
    this.x.num--;
  }
  onSubmit(value:any):void{
    console.log(value);
    alert("Thank you! Form submitted successfully. ")
  }
  reload(){
    window.location.reload();
  }
}
