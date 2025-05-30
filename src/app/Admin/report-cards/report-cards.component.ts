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
  userCount: number = 0;
  artisanCount: number = 0;
  employerCount: number = 0;
  deletedUserCount: number = 0;
  usersRejectedCount: number = 0;
  usersApprovedCount: number = 0;

  reports = [
    { title: 'Registered Users', value: () => this.userCount, icon: 'fas fa-users', color: '#007bff' },
    { title: 'Number of Job Artisan', value: () => this.artisanCount, icon: 'fas fa-id-card', color: '#17a2b8' },
    { title: 'Number of Employers', value: () => this.employerCount, icon: 'fas fa-building', color: '#28a745' },
    { title: 'Number of Posts', value: () => this.formPostsCount, icon: 'fas fa-file-alt', color: '#ffc107' },
    { title: 'Users Rejected', value: () => this.usersRejectedCount, icon: 'fas fa-times-circle', color: '#dc3545' },
    { title: 'Users Approved', value: () => this.usersApprovedCount, icon: 'fas fa-check-circle', color: '#28a745' }
  ];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.loadFormPostsCount();
    this.loadUserStats();
    this.loadDeletedUserCount();
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

  loadUserStats(): void {
    this.jobService.getUserStats().subscribe({
      next: (data) => {
        this.userCount = data.total;
        this.artisanCount = data.artisans;
        this.employerCount = data.employers;
        this.usersApprovedCount = data.approved;
        this.usersRejectedCount = data.rejected;
      },
      error: (err) => {
        console.error(' Failed to load user stats:', err);
      }
    });
  }

  loadDeletedUserCount(): void {
    this.jobService.getDeletedUserCount().subscribe({
      next: (res) => {
        this.deletedUserCount = res.count;
      },
      error: (err) => {
        console.error(' Failed to load deleted user count:', err);
      }
    });
  }

  getValue(value: any): any {
    return typeof value === 'function' ? value() : value;
  }

}
