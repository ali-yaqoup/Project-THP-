import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-cards.component.html',
  styleUrls: ['./report-cards.component.css']
})
export class ReportCardsComponent {
  reports = [
    { title: 'Registered Users', value: '1200', icon: 'fas fa-users', color: '#007bff' },
    { title: 'Number of Job Artisan', value: '800', icon: 'fas fa-id-card', color: '#17a2b8' },
    { title: 'Number of Employers', value: '200', icon: 'fas fa-building', color: '#28a745' },
    { title: 'Jobs Posted', value: '450', icon: 'fas fa-briefcase', color: '#ffc107' },
    { title: 'Requests Accepted', value: '300', icon: 'fas fa-check-circle', color: '#198754' },
    { title: 'Requests Rejected', value: '150', icon: 'fas fa-times-circle', color: '#dc3545' },
  ];
}
