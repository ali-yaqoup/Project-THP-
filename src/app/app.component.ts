import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobListingsComponent } from "./job-listings/job-listings.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JobListingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'THP';
}
