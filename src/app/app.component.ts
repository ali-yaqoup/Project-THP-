import { Component } from '@angular/core';
import { JobPostingBiddingComponent } from './job-posting-bidding/job-posting-bidding.component';

@Component({
  selector: 'app-root',
  imports: [JobPostingBiddingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'THP';

}
