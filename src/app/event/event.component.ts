import { Component } from '@angular/core';
import {EventService} from "../event.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  events:any;
  constructor(private event:EventService) {}
  ngOnInit(){
    this.event.getEvent().subscribe(data =>{
      this.events=data;
      console.log(data)
    })
  }
}
