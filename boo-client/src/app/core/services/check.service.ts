import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  
  api: string = environment.apiUrl+"cheques/";

  constructor(private http: HttpClient) { }

  
  confirmeCheque(code){
    return this.http.get(this.api+"validChequeUser/"+code);
  }
  listCheques(){
    return this.http.get(this.api+'findAllByUser');
  }
}
