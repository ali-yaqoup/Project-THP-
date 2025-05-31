import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'http://127.0.0.1:8085/api';

  private formPostsSubject = new BehaviorSubject<any[]>([]);
  formPosts$ = this.formPostsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadFormPosts();
  }


  loadFormPosts(): void {
    this.http.get<any[]>(`${this.apiUrl}/form-posts`).subscribe((posts) => {
      this.formPostsSubject.next(posts);
    });
  }


  deleteFormPost(id: number): Observable<any> {
    return new Observable((observer) => {
      this.http.delete(`${this.apiUrl}/form-posts/${id}`).subscribe({
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
    return this.http.get<any[]>(`${this.apiUrl}/form-posts`);
  }

  
  getDeletedPostCount(): Observable<{ count: number }> {
    return this.http.get<{ count: number }>(`${this.apiUrl}/admin/form-posts-deleted-count`);
  }

 
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/users`);
  }

  
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/admin/users/${id}`);
  }


  getUserCount(): Observable<{ count: number }> {
    return this.http.get<{ count: number }>(`${this.apiUrl}/admin/user-count`);
  }

 
  getUserStats(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/admin/user-stats`);
  }


  getDeletedUserCount(): Observable<{ count: number }> {
    return this.http.get<{ count: number }>(`${this.apiUrl}/admin/users-deleted-count`);
  }


  getMonthlyUserRegistrations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/monthly-user-registrations`);
  }


  updateUserStatus(userId: number, status: string) {
    return this.http.patch(`${this.apiUrl}/users/${userId}/status`, { status });
  }
  updateUser(userId: number, data: any): Observable<any> {
  return this.http.put(`http://127.0.0.1:8085/api/users/${userId}`, data);
}

}
