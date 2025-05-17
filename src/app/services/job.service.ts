import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private adminApiUrl = 'http://127.0.0.1:8085/api/admin';

  constructor(private http: HttpClient) {}

  // Get all form posts
  getFormPosts(): Observable<any> {
    return this.http.get<any>(`${this.adminApiUrl}/form-posts`);
  }

  // Delete specific form post by ID
  deleteFormPost(id: number): Observable<any> {
    return this.http.delete(`${this.adminApiUrl}/form-posts/${id}`);
  }

  // Get total count of form posts
  getFormPostCount(): Observable<any> {
    return this.http.get<any>(`${this.adminApiUrl}/form-posts-count`);
  }

  // Get count of Artisan users
  getArtisanCount(): Observable<any> {
    return this.http.get<any>(`${this.adminApiUrl}/artisan-count`);
  }
}
