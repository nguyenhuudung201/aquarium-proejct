import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventSingleService {
  events: any= {};
  id:number=0;
  constructor( private http:HttpClient) { }
  getEventID(id:number): Observable<any>{
    return this.http.get<any>(`http://localhost:5000/event/single?id=${id}`);
  }
}
