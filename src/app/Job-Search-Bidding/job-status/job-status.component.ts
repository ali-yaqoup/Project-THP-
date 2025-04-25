import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-status',
  standalone: true,
  template: `
    <div class="card border-0 shadow-sm">
      <div class="card-header bg-dark text-white">
        <h5 class="mb-0">Update Job Status</h5>
      </div>
      <div class="card-body">
        <label for="statusSelect" class="form-label">Select Status:</label>
        <select id="statusSelect" class="form-select"
                [(ngModel)]="status"
                (change)="updateStatus()">
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <div class="mt-2 text-muted">
          Current: <strong class="text-primary text-capitalize">{{ status }}</strong>
        </div>
      </div>
    </div>
  `,
  imports: [FormsModule]
})
export class JobStatusComponent {
  @Input() jobId!: number;
  status = 'pending';

  updateStatus() {
    console.log('Status updated:', this.status);
  }
}
