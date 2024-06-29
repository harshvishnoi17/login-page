import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://api.escuelajs.co/api/v1/auth/';

const REGISTER_API = 'https://api.escuelajs.co/api/v1/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      {
        email,
        password,
      },
      httpOptions
    );
  }


  getUserFromToken(accessToken: string): Observable<any> {
    const httpOptionsWithAuthToken = {headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': "Bearer " + accessToken
      })};

      console.log(httpOptionsWithAuthToken);
  
    return this.http.get(
      AUTH_API + 'profile',
      httpOptionsWithAuthToken
    );
  }



  register(name: string, email: string, password: string, avatar: string): Observable<any> {
    return this.http.post(
        REGISTER_API + 'users',
      {
        name,
        email,
        password,
        avatar
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}