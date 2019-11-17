import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  api: string = "http://localhost:8080/commandes/";
  constructor(private http: HttpClient) { }
  findAll(){
    return this.http.get<any[]>(this.api+"findAll");
  }
}
