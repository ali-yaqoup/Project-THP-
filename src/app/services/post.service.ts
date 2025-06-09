import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {
  private apiUrl = 'http://localhost:8000/api/posts';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  createPost(postData: any): Observable<any> {
    return this.http.post(this.apiUrl, postData, { headers: this.getAuthHeaders() });
  }

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: this.getAuthHeaders() });
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }

  getPostById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }

  updateJobPost(id: number, postData: FormData): Observable<any> {
    postData.append('_method', 'PUT');
    return this.http.post(`${this.apiUrl}/${id}`, postData, { headers: this.getAuthHeaders() });
  }

  getImageUrl(attachment: string): string {
    return `http://localhost:8000${attachment}`;
  }

  getBidsByPost(post_id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/bids/${post_id}`, { headers: this.getAuthHeaders() });
  }

  updateBidStatus(id: number, status: 'Approved' | 'Rejected') {
    return this.http.put<{ message: string; bid: any }>(
      `http://localhost:8000/api/bids/${id}/status`,
      { status },
      { headers: this.getAuthHeaders() }
    );
  }
}
