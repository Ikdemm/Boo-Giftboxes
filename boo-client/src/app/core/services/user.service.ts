import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api: string = environment.apiUrl+"auth/";

  constructor(private http: HttpClient) { }

  signUP(user){
    return this.http.post(this.api+"signup",user);
  }
  
}
