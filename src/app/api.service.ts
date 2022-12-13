import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient ) { }
  newsApiUrl ="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=694012ce670847da90c4285a795c4865"
  
  //heading() 
  topHeading()
  {
    return this._http.get(this.newsApiUrl);
  }

}
