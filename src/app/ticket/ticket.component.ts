import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {EventService} from "../event.service";
import {EventSingleService} from "../event-single.service";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  events:any;
  eventid:any;
  ticket:any={
    name:'',
    price:0,
    timeBegin:'',
    timeEnd:'',
    images:'',
  };
  reload(){
    window.location.reload();
  }
  constructor(private event:EventService,private fb:FormBuilder, private eventID:EventSingleService) {}
  ngOnInit(){
    this.event.getEvent().subscribe(data =>{
      this.events=data;
      console.log(data)
    })

  }


  infoUser=this.fb.group({
    "email":["",[Validators.required,Validators.email]],
    "name":["",[Validators.required]],
    "event":["",[Validators.required]],
    "phone":["",[Validators.required,Validators.pattern('[- +()0-9]+')]],
    "num":[1,[Validators.required]],
  })

  get f(){
    return this.infoUser.controls
  }
  plushNum(){
    this.fb.group('num')
  }
  onSubmit(value:any):void{
    this.eventID.getEventID(value.event).subscribe(data =>{
      this.eventid=data;
      console.log(data);
      this.ticket.price = this.eventid.price_personal * value.num;
      this.ticket.name = this.eventid.name;
      this.ticket.timeBegin = this.eventid.BEGIN_time;
      this.ticket.timeEnd = this.eventid.END_time;
      this.ticket.images= this.eventid.images;
    })
    console.log(value);
    alert("Thank you! Form submitted successfully. ");
  }

}
