import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:8000/api'

  constructor(private http: HttpClient) {}

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
}