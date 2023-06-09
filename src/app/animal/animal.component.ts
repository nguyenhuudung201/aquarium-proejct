import {Component, OnInit} from '@angular/core';
import {AnimalService} from "../animal.service";

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
  providers:[AnimalService]
})
export class AnimalComponent implements OnInit{
    searchAnimal:any;
    animals: any=[];
    constructor( private animal:AnimalService) {}
    ngOnInit() {
      this.animal.getAnimal().subscribe(data =>{
        this.animals = data;
        console.log(this.animals);
      })
    }
    getAnimal(){
      this.animal.getAnimal()
    }
  // search(){
  //   this.animal.searchAnimal(this.s)
  //     .subscribe(data=>{
  //       this.animals =  data.animals;
  //     })
  // }
  // ngOnInit(){
  //     this.getAnimal();
  //     console.log(this.animals);
  // }
  //
  // getAnimal(){
  //   this.animal.getAnimal().subscribe(data=>{
  //       this.animals = data;
  //
  //     })
  // }
}
