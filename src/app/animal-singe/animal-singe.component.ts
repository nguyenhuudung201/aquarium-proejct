import { Component } from '@angular/core';
import {AnimalSingleService} from "../animal-single.service";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-animal-singe',
  templateUrl: './animal-singe.component.html',
  styleUrls: ['./animal-singe.component.css']
})
export class AnimalSingeComponent {
  animals: any={};
  id:number=0;
  constructor( private animal:AnimalSingleService,private route:ActivatedRoute, private http:HttpClient ) {}
  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.animal.getAnimalID(params['id']).subscribe(data =>{
        this.animals = data;
        console.log(this.animals);
      })
    })
  }
}
