import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChecksService {
  api: string = environment.apiURL+"cheques/";
  constructor(private http: HttpClient) { }
  findAllByPartner(){
    return this.http.get<any[]>(this.api+"findAllByPartner");
  }
  findAll(){
    return this.http.get<any[]>(this.api+"findAll");
  }
  confirmeCheque(code){
    return this.http.get(this.api+"validChequePartner/"+code);
  }
}
