import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor( private http:HttpClient) { }
  getAnimal(): Observable<any>{
    return this.http.get<any>('http://localhost:5000/animal');
  }

}
