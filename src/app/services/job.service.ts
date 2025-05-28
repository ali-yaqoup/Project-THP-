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

  // إضافة بوست جديد
  loadFormPosts(): void {
    this.http.get<any[]>(`${this.apiUrl}/form-posts`).subscribe((posts) => {
      this.formPostsSubject.next(posts);
    });
  }

  // حذف بوست
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

  // جلب البوستات مباشرة
  getFormPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/form-posts`);
  }

  // عدد البوستات المحذوفة (soft delete)
  getDeletedPostCount(): Observable<{ count: number }> {
    return this.http.get<{ count: number }>(`${this.apiUrl}/admin/form-posts-deleted-count`);
  }

  // جلب جميع المستخدمين
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/users`);
  }

  // حذف مستخدم
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/admin/users/${id}`);
  }

  // عدد كل المستخدمين
  getUserCount(): Observable<{ count: number }> {
    return this.http.get<{ count: number }>(`${this.apiUrl}/admin/user-count`);
  }

  // عدد المستخدمين حسب النوع + approved/rejected
  getUserStats(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/admin/user-stats`);
  }

  // عدد المستخدمين المحذوفين (soft deleted users)
  getDeletedUserCount(): Observable<{ count: number }> {
    return this.http.get<{ count: number }>(`${this.apiUrl}/admin/users-deleted-count`);
  }

  // عدد المستخدمين الجدد شهريا
  getMonthlyUserRegistrations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/monthly-user-registrations`);
  }

  // تحديث حالة المستخدم (approved / rejected)
  updateUserStatus(userId: number, status: string) {
    return this.http.patch(`${this.apiUrl}/users/${userId}/status`, { status });
  }
  updateUser(userId: number, data: any): Observable<any> {
  return this.http.put(`http://127.0.0.1:8085/api/users/${userId}`, data);
}

}
