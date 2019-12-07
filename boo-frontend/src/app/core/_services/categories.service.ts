import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Categorie } from 'app/shared/models/categorie.model';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  api: string = environment.apiURL+"categories/";
  constructor(private http: HttpClient) { }
  findAll(){
    return this.http.get<Categorie[]>(this.api+"findAll");
  }

  save(categorie){
    console.log(categorie)
    return this.http.post(this.api+"save",categorie)
  }
  
  delete(id){
    console.log("sending request to delete category")
    console.log(id)
    return this.http.delete(this.api+"delete/"+id,{responseType: 'text'})
  }

  update(categorie){
    console.log(categorie)
    return this.http.post(this.api+"update",categorie)
  }
  findByName(name){
    return this.http.get<Categorie>(this.api+"findByName/"+name)
  }
  getIconFile(name){
    return this.http.get(this.api+"iconDownload/"+name,{responseType: 'blob'});
  }
}
