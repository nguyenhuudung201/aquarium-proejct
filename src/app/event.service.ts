import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
  getEvent(): Observable<any>{
    return this.http.get<any>('http://localhost:5000/eventt');
  }
}
