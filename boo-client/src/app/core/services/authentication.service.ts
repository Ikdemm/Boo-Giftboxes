import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import decode from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  api: string = environment.apiUrl + "auth/";
  //check logined Password
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { 
    if(localStorage.getItem('token'))
    this.loggedIn.next(true);
    
  }
  login(email: string, password: string) {
    return this.http.post<any>(this.api + "login", { email: email, password: password })
      .pipe(map(user => {
        console.log("monta")
        console.log(user.accessToken)
        this.loggedIn.next(true);
        localStorage.setItem('token', JSON.stringify(user.accessToken));
        return user;
      }));
  }
  updatePassword(updatePassword){
    return this.http.post<any>(this.api + 'update-password', updatePassword);
  }
  changePassword(changePassword){
    return this.http.post<any>(this.api + 'change-password', changePassword);
  }
  resetPassword(email){
    return this.http.post<any>(this.api + 'reset-password', {email});
  }
  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    // localStorage.removeItem('role');
  }
  getUser() {
    return localStorage.getItem('token');
  }
  decode() {
    return decode(localStorage.getItem('token'));
  }
  decodeReset(token){
    return decode(token);
  }
}
