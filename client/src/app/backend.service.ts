import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private loginURL = 'http://localhost:3000/login';
  private encoderURL = 'http://localhost:3000/encoder';

  constructor(private http: HttpClient) {}

  login(email: string, password: any): Observable<any> {
    return this.http.post(this.loginURL, { email, password });
  }

  encoder(input: any): Observable<any> {
    return this.http.post(this.encoderURL, { input });
  }
}
