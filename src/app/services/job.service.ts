import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private formPostApiUrl = 'http://127.0.0.1:8085/api/form-posts';

  constructor(private http: HttpClient) {}

  getFormPosts(): Observable<any> {
    return this.http.get<any>(this.formPostApiUrl);
  }
}
