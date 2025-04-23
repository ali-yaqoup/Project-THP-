import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bid-submission',
  standalone: true,
  templateUrl: './bid-submission.component.html',
  styleUrls: ['./bid-submission.component.css'],
  imports: [FormsModule]
})
export class BidSubmissionComponent {
  @Input() jobId!: number;
  bidPrice = 0;
  bidTimeline = '';

  submitBid() {
    console.log('Bid submitted:', {
      jobId: this.jobId,
      price: this.bidPrice,
      timeline: this.bidTimeline
    });
  }
}

