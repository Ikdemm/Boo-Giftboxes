import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  api: string = environment.apiUrl+"commandes/";

  constructor(private http: HttpClient) { }

  confirmOrder(order){
    return this.http.post(this.api+"save",order);
  }
}
