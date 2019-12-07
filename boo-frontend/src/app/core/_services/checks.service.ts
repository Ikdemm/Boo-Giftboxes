import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChecksService {
  api: string = environment.apiURL+"cheques/";
  constructor(private http: HttpClient) { }
  findAll(){
    return this.http.get<any[]>(this.api+"findAll");
  }
}
