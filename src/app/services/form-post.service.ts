import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FormPostService {
  private apiUrl = 'http://localhost:8000/api/posts';

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
  return `http://localhost:8000${attachment}`;
}

}
