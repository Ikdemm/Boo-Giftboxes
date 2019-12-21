import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  api: string = environment.apiUrl+"categories/";

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<any[]>(this.api+"getCategories");
  }

}
