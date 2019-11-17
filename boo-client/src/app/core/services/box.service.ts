import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Box } from '../../shared/models/box.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  api: string = "http://localhost:8080/coffrets/";

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<any[]>(this.api+"getBoxes");
  }

  findBox(id: string) {
    let box = this.findAll().pipe(
      map((boxes: Box[]) => boxes.find(box => box._id === id))
    );
    console.log(box);
    return(box);
  }

}
