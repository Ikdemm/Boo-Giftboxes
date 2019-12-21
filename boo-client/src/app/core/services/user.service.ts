import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  signUP(user){
    return this.http.post(this.api+"auth/signup",user);
  }
  getUserInformation(){
    return this.http.get<User>(this.api+"users/me");
  }
  updateUserInformation(user){
    return this.http.put<User>(this.api+"users/update",user);
  }
  
}
