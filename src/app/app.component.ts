import { Component } from '@angular/core';
import { JobListingsComponent } from "./job-listings/job-listings.component";
import { AdminComponent } from "./Admin/admin.component";
import { RouterOutlet } from '@angular/router';
import { AdminDashboardComponent } from "./Admin/admin-sidebar/admin-dashboard.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdminComponent, AdminDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'THP';
}
