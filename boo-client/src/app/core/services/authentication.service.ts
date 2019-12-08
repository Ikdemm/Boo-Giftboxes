import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import decode from 'jwt-decode';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  api: string = environment.apiUrl+"auth/";

  constructor(private http: HttpClient) { }
  login(email: string, password: string) {
    return this.http.post<any>(this.api+"login", { email: email, password: password })
        .pipe(map(user => {
          console.log("monta")
          console.log(user.accessToken)
          localStorage.setItem('token', JSON.stringify(user.accessToken));
            return user;
        }));
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
   // localStorage.removeItem('role');
}
getUser(){
  return localStorage.getItem('token');
}
decode() {
  return decode(localStorage.getItem('token'));
}
}
