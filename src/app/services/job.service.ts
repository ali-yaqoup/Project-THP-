import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';


@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = environment.apiBaseUrl;  

  constructor(private http: HttpClient) {}

  // Get all form posts
  getFormPosts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/admin/form-posts`);
  }

  // Delete specific form post by ID
  deleteFormPost(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/admin/form-posts/${id}`);
  }

  // Get total count of form posts
  getFormPostCount(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/admin/form-posts-count`);
  }

  // Get count of Artisan users
  getArtisanCount(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/admin/artisan-count`);
  }
}
