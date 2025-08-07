import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:8000/api';

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  setLoggedIn(value: boolean) {
    this.loggedIn.next(value);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  loginStep1(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login-step1`, data);
  }

  loginStep2(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login-step2`, data);
  }

  sendResetPasswordOtp(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/password/send-otp`, { email });
  }

  resetPassword(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/password/reset`, data);
  }

  getUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user`);
  }

  verifyEmail(id: string, hash: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/email/verify/${id}/${hash}`);
  }

  logout() {
    this.loggedIn.next(false);

    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('token');
    }
  }

  isUserAuthenticated(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      return !!localStorage.getItem('token');
    }
    return false;
  }
}
