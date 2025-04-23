import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { Job } from "../interfaces/job.interface";
import { JobService } from "../services/job.service";

@Component({
  selector: 'app-job-list',
  standalone: true,
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];
  filteredJobs: Job[] = [];
  categories = ['Electrical', 'Plumbing', 'HVAC'];

  filters = {
    location: '',
    category: '',
    minBudget: 0,
    maxBudget: 0
  };

  constructor(private jobService: JobService, private router: Router) {}

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): void {
    this.jobs = [];
    this.jobService.getJobs(this.filters).subscribe({
      next: (jobs: Job[]) => {
        const uniqueJobs = jobs.filter((job, index, self) =>
          index === self.findIndex(j => j.id === job.id)
        );
        this.jobs = uniqueJobs;
      },
      error: (err: any) => {
        console.error('Error loading jobs:', err);
      }
    });
  }

  applyFilters(): void {
    this.loadJobs();
  }

  clearFilters(): void {
    this.filters = {
      location: '',
      category: '',
      minBudget: 0,
      maxBudget: 0
    };
    this.loadJobs();
  }

  @Output() jobSelectedForChat = new EventEmitter<number>();

  selectJobForChat(jobId: number) {
    this.jobSelectedForChat.emit(jobId);
  }
}
