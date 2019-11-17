import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChecksService {
  api: string = "http://localhost:8080/cheques/";
  constructor(private http: HttpClient) { }
  findAll(){
    return this.http.get<any[]>(this.api+"findAll");
  }
}
