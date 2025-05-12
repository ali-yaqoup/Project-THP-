import { Component } from '@angular/core';
import { JobListingsComponent } from "./job-listings/job-listings.component";

@Component({
  selector: 'app-root',
  imports: [JobListingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'THP';
}
