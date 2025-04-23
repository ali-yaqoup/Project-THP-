import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { JobListComponent } from '../job-list/job-list.component';
import { MessagingComponent } from '../messaging/messaging.component';
import { JobStatusComponent } from '../job-status/job-status.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    JobListComponent,
    MessagingComponent,
    JobStatusComponent
  ],
  template: `
    <div class="container mt-4">
      <div class="row">
        <!-- Main job list section -->
        <div class="col-lg-8 mb-4">
          <app-job-list (jobSelectedForChat)="onJobSelected($event)"></app-job-list>
        </div>

        <!-- Sidebar with messaging and job status -->
        <div class="col-lg-4">
          <div class="position-sticky" style="top: 80px;">
            <button class="btn btn-outline-primary mb-3 w-100" (click)="toggleMessages()">
              {{ showMessages ? 'Hide Messages' : 'Show Messages' }}
            </button>
            <app-messaging
  *ngIf="showMessages"
  [jobId]="selectedJobIdForChat"
  (goToFullChat)="onGoToFullChat()">
</app-messaging>


            <div class="mt-4">
              <app-job-status></app-job-status>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <router-outlet></router-outlet> -->
  `
})
export class HomeComponent {
  private router = inject(Router);

  showMessages = false;
  selectedJobIdForChat: number | null = null;

  toggleMessages() {
    this.showMessages = !this.showMessages;
  }

  onJobSelected(jobId: number) {
    this.selectedJobIdForChat = jobId;
    this.showMessages = true;
  }

  onGoToFullChat() {
    if (this.selectedJobIdForChat !== null) {
      this.router.navigate(['/messages'], {
        queryParams: { jobId: this.selectedJobIdForChat }
      });
    }
  }
}
