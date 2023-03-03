import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AnimalSingleService {
   animals: any=[];
   id:number=0;
  constructor(private http:HttpClient ) { }
  getAnimalID(id:number): Observable<any>{
    return this.http.get<any>(`http://localhost:5000/animal/single?id=${id}`);
  }
}

