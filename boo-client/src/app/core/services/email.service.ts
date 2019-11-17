import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  api: string = "http://localhost:8080/email/";

  constructor(private http: HttpClient) { }

  sendEmail(body) {
    return this.http.post(this.api, body);
  }
}
