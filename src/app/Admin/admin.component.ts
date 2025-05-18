import { Component } from '@angular/core';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { JobPostingsComponent } from './job-postings/job-postings.component';
import { ReportsSectionComponent } from './reports-section/reports-section.component';
import { AdminDashboardComponent } from './admin-sidebar/admin-dashboard.component';
import { ReportCardsComponent } from './report-cards/report-cards.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-admin',
  imports: [RouterModule, CommonModule, ManageUsersComponent, JobPostingsComponent, ReportsSectionComponent, AdminDashboardComponent, ReportCardsComponent,HeaderComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  users: any;
  reports: any;
    title(title: any) {
      throw new Error('Method not implemented.');
    }
  constructor(private router: Router) {}
  
    closeModal() {
      this.router.navigate([{ outlets: { popup: null }}]);
    }
    get isModalOpen(): boolean {
      return location.href.includes('(popup:');
    }
}
