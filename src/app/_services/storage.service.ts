import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';
const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public saveTokens(accessToken: any, refreshToken: any): void {
    window.sessionStorage.removeItem(ACCESS_TOKEN);
    window.sessionStorage.setItem(ACCESS_TOKEN, accessToken);
    window.sessionStorage.removeItem(REFRESH_TOKEN);
    window.sessionStorage.setItem(refreshToken, refreshToken);
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }

  public isActiveUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user !=null) {
      return true;
    }

    return false;
  }

  

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }
}