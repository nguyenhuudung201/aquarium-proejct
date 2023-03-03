import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: any= {};
  id:number=0;

  constructor(private http:HttpClient) { }
  getBlog(): Observable<any>{
    return this.http.get<any>('http://localhost:5000/blog');
  }
  getBlogID(id:number): Observable<any>{
    return this.http.get<any>(`http://localhost:5000/blog/single?id=${id}`);
  }
  getSinglePost(){
    return this.http.get<any>('http://localhost:5000/single/post');
  }
}
