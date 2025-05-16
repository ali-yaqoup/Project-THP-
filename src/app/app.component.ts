import { Component } from '@angular/core';
import { JobListingsComponent } from "./job-listings/job-listings.component";
import { AdminComponent } from "./Admin/admin.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'THP';
}
