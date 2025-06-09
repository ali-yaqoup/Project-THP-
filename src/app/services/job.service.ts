import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'http://localhost:8000/api';
  private formPostsSubject = new BehaviorSubject<any[]>([]);
  formPosts$ = this.formPostsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadFormPosts();
  }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  loadFormPosts(): void {
    this.http.get<any[]>(`${this.apiUrl}/admin/form-posts`, {
      headers: this.getAuthHeaders()
    }).subscribe((posts) => {
      this.formPostsSubject.next(posts);
    });
  }

  deleteFormPost(id: number): Observable<any> {
    return new Observable((observer) => {
      this.http.delete(`${this.apiUrl}/admin/form-posts/${id}`, {
        headers: this.getAuthHeaders()
      }).subscribe({
        next: (res) => {
          const updated = this.formPostsSubject.getValue().filter(p => p.post_id !== id);
          this.formPostsSubject.next(updated);
          observer.next(res);
          observer.complete();
        },
        error: (err) => observer.error(err)
      });
    });
  }

  getFormPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/form-posts`, {
      headers: this.getAuthHeaders()
    });
  }

  getDeletedPostCount(): Observable<{ count: number }> {
    return this.http.get<{ count: number }>(`${this.apiUrl}/admin/form-posts-deleted-count`, {
      headers: this.getAuthHeaders()
    });
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/users`, {
      headers: this.getAuthHeaders()
    });
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/admin/users/${id}`, {
      headers: this.getAuthHeaders()
    });
  }

  getUserCount(): Observable<{ count: number }> {
    return this.http.get<{ count: number }>(`${this.apiUrl}/admin/user-count`, {
      headers: this.getAuthHeaders()
    });
  }

  getUserStats(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/admin/user-stats`, {
      headers: this.getAuthHeaders()
    });
  }

  getDeletedUserCount(): Observable<{ count: number }> {
    return this.http.get<{ count: number }>(`${this.apiUrl}/admin/users-deleted-count`, {
      headers: this.getAuthHeaders()
    });
  }

  getMonthlyUserRegistrations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/monthly-user-registrations`, {
      headers: this.getAuthHeaders()
    });
  }

  updateUserStatus(userId: number, status: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/users/${userId}/status`, { status }, {
      headers: this.getAuthHeaders()
    });
  }

  updateUser(userId: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/${userId}`, data, {
      headers: this.getAuthHeaders()
    });
  }
}
