import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-report-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-cards.component.html',
  styleUrls: ['./report-cards.component.css']
})
export class ReportCardsComponent implements OnInit {

  formPostsCount: number = 0;

  reports = [
    { title: 'Registered Users', value: 1200, icon: 'fas fa-users', color: '#007bff' },
    { title: 'Number of Job Artisan', value: 800, icon: 'fas fa-id-card', color: '#17a2b8' },
    { title: 'Number of Employers', value: 200, icon: 'fas fa-building', color: '#28a745' },
    { title: 'Form Posts', value: () => this.formPostsCount, icon: 'fas fa-file-alt', color: '#ffc107' },
    { title: 'Requests Accepted', value: 300, icon: 'fas fa-check-circle', color: '#198754' },
    { title: 'Requests Rejected', value: 150, icon: 'fas fa-times-circle', color: '#dc3545' },
  ];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.loadFormPostsCount();
  }

  loadFormPostsCount(): void {
    this.jobService.getFormPosts().subscribe({
      next: (data) => {
        this.formPostsCount = data.length;
      },
      error: (err) => {
        console.error('Failed to load form posts:', err);
      }
    });
  }

  getValue(value: any): any {
    return typeof value === 'function' ? value() : value;
  }
}
