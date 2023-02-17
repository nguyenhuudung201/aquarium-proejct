import { Component } from '@angular/core';
import * as url from "url";
declare function img():any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ChangerImages1(mouseTarget:HTMLElement){
    mouseTarget.style.backgroundImage="url('../../assets/images/Hygrophila Difformis.jpg')"
  }
  ChangerImages2(mouseTarget:HTMLElement){
    mouseTarget.style.backgroundImage="url('../../assets/images/Java Moss.jpg')"
  }
  ChangerImages3(mouseTarget:HTMLElement){
    mouseTarget.style.backgroundImage="url('../../assets/images/Mastigias Aquarium.jpg')"
  }
  ChangerImages4(mouseTarget:HTMLElement){
    mouseTarget.style.backgroundImage="url('../../assets/images/Anubias Nana.jpg')"
  }
  ngOnInit(){
    this.ChangerImages1;
  }

}
