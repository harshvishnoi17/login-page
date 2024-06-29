import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
//  import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';


interface User {
  name?: number;
  email: string;
  password: string;
  photoUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/auth/';

  constructor(private http: HttpClient, private router: Router) {}

  signup(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user).pipe(
      catchError((error) => {
        console.error('Signup error:', error);
        return throwError(() => error);
      })
    );
  }

  login(username: string, password: string): Observable<User[]> {
    if(username === '' || password === '') {
      return of ([])
    }

    return this.http.get<User[]>(`${this.apiUrl}?username=${username}&password=${password}`);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
