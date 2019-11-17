import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Partner } from 'app/shared/models/partner.model';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  api: string = "http://localhost:8080/users/";
  constructor(private http: HttpClient) { }
  findAll(){
    return this.http.get<Partner[]>(this.api+"listPartners");
  }
  save(partner){
    console.log(partner)
    return this.http.post(this.api+"savePatner",partner)
  }
  findAllByCategory(id){
    return this.http.get<Partner[]>(this.api+"listPartnersByCategory/"+id)
  }
  getImageFile(name){
    return this.http.get(this.api+"imageDownload/"+name,{responseType: 'blob'});
  }
}
