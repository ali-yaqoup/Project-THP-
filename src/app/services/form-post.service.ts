import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';


@Injectable({ providedIn: 'root' })
export class FormPostService {
  private apiUrl = `${environment.apiBaseUrl}/posts`;

  constructor(private http: HttpClient) {}

  createPost(postData: any): Observable<any> {
    return this.http.post(this.apiUrl, postData);
  }

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getPostById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateJobPost(id: number, postData: FormData): Observable<any> {
    postData.append('_method', 'PUT'); // مهم جداً
    return this.http.post(`${this.apiUrl}/${id}`, postData); // استخدم POST مش PUT
  }

  getImageUrl(attachment: string): string {
    // قاعدة الرابط بدون /api في النهاية + المسار المرفق
    return `http://localhost:8000${attachment}`;
  }
}
