import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BoxesService {

  api: string = "http://localhost:8080/coffrets/";
  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<any[]>(this.api+"findAll");
  }
  
  save(coffret){
    console.log(coffret)
    return this.http.post(this.api+"save",coffret)
  } 
} 
