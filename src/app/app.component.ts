import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ManageUsersComponent } from "./Component/Admin/manage-users/manage-users.component";
import { JobPostingsComponent } from "./Component/Admin/job-postings/job-postings.component";
import { ReportsSectionComponent } from "./Component/Admin/reports-section/reports-section.component";
import { AdminDashboardComponent } from "./Component/Admin/admin-dashboard/admin-dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, ManageUsersComponent, JobPostingsComponent, ReportsSectionComponent, AdminDashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
users: any;
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
