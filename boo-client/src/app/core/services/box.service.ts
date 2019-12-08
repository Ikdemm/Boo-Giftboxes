import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Box } from '../../shared/models/box.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  api: string = environment.apiUrl+"coffrets/";

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Box[]>(this.api+"getBoxes");
  }

  findBox(id: string) {
    let box = this.findAll().pipe(
      map((boxes: Box[]) => boxes.find(box => box.id === id))
    );
    console.log(box);
    return(box);
  }

}
