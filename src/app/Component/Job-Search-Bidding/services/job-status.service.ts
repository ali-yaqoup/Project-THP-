import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class JobStatusService {
  getJobs(filters: { location: string; category: string; minBudget: null; maxBudget: null; }) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = '/api/jobs';

  constructor(private http: HttpClient) {}

  updateStatus(jobId: number, status: string) {
    return this.http.patch(`${this.apiUrl}/${jobId}`, { status });
  }
}
