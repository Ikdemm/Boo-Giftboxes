import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  api: string = environment.apiUrl+"email/";

  constructor(private http: HttpClient) { }

  sendEmail(body) {
    return this.http.post(this.api, body);
  }
}
