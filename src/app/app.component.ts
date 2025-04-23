import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ManageUsersComponent } from "./Admin/manage-users/manage-users.component";
import { JobPostingsComponent } from "./Admin/job-postings/job-postings.component";
import { ReportsSectionComponent } from "./Admin/reports-section/reports-section.component";
import { AdminDashboardComponent } from "./Admin/admin-sidebar/admin-dashboard.component";
import { ReportCardsComponent } from "./Admin/report-cards/report-cards.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, ManageUsersComponent, JobPostingsComponent, ReportsSectionComponent, AdminDashboardComponent, ReportCardsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
