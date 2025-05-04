import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from '../interfaces/job.interface';

@Injectable({ providedIn: 'root' })
export class JobService {
  private jobs: Job[] = [
    {
      id: 1,
      title: 'Fix Kitchen Sink',
      description: 'The sink is leaking and needs to be repaired.',
      category: 'Plumbing',
      budget: 150,
      deadline: new Date('2025-04-20'),
      location: 'Ramallah',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Install New Lights',
      description: 'Need ceiling lights installed in living room.',
      category: 'Electrical',
      budget: 200,
      deadline: new Date('2025-04-25'),
      location: 'Jerusalem',
      status: 'pending'
    },
    {
      id: 3,
      title: 'AC Maintenance',
      description: 'Regular maintenance for a split unit AC.',
      category: 'HVAC',
      budget: 100,
      deadline: new Date('2025-04-18'),
      location: 'Bethlehem',
      status: 'pending'
    }
  ];

  getJobs(filters?: {
    location?: string;
    category?: string;
    minBudget?: number | null;
    maxBudget?: number | null;
  }): Observable<Job[]> {
    let filtered = this.jobs;

    if (filters) {
      if (filters.location) {
        filtered = filtered.filter(job =>
          job.location.toLowerCase().includes(filters.location!.toLowerCase())
        );
      }

      if (filters.category) {
        filtered = filtered.filter(job => job.category === filters.category);
      }

      if (filters.minBudget != null) {
        filtered = filtered.filter(job => job.budget >= filters.minBudget!);
      }

      if (filters.maxBudget != null && filters.maxBudget !== 0) {
        filtered = filtered.filter(job => job.budget <= filters.maxBudget!);
      }
    }

    return of(filtered);
  }
}
