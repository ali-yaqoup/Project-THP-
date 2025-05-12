import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobCardComponent } from './job-card/job-card.component';
import { ApplyModalComponent } from './apply-modal/apply-modal.component';

@Component({
  selector: 'app-job-listings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    JobCardComponent,
    ApplyModalComponent
  ],
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.css']
})
export class JobListingsComponent {
prevPage() {
throw new Error('Method not implemented.');
}
currentPage: any;
totalPages: any;
nextPage() {
throw new Error('Method not implemented.');
}
  selectedCategory = '';
  selectedLocation = '';
  budgetMin: number | null = null;

  showApplyModal: boolean = false;
  selectedJob: any = null;

  categories = ['Plumbing', 'Electrical', 'Carpentry', 'Painting','Ironwork'];
  locations = ['Ramallah', 'Jerusalem', 'Bethlehem', 'Tulkarem', 'Hebron'];

  jobs = [
    {
      title: 'Fix leaking pipe',
      description: 'Need urgent help with a leaking kitchen pipe.',
      category: 'Plumbing',
      budgetMin: 50,
      budgetMax: 100,
      deadline: '2025-05-15',
      location: 'Ramallah',
      image: 'assets/plumbing.jpg'
    },
   {
  title: 'Install iron gate',
  description: 'Looking for a skilled blacksmith to install a custom iron gate at the entrance.',
  category: 'Ironwork',
  budgetMin: 200,
  budgetMax: 400,
  deadline: '2025-05-18',
  location: 'Jerusalem',
  image: 'assets/Blacksmith.jpg'
},
    {
      title: 'Paint bedroom walls',
      description: 'Looking for someone to paint two walls in the bedroom.',
      category: 'Painting',
      budgetMin: 100,
      budgetMax: 200,
      deadline: '2025-05-20',
      location: 'Bethlehem',
      image: 'assets/painting.jpg'
    },
    {
      title: 'Assemble furniture',
      description: 'Need help assembling IKEA furniture.',
      category: 'Carpentry',
      budgetMin: 60,
      budgetMax: 120,
      deadline: '2025-05-22',
      location: 'Tulkarem',
      image: 'assets/jpb.jpg'
    },
    {
      title: 'Electrical outlet repair',
      description: 'Fix two malfunctioning electrical outlets.',
      category: 'Electrical',
      budgetMin: 80,
      budgetMax: 130,
      deadline: '2025-05-25',
      location: 'Hebron',
      image: 'assets/electricity.jpg'
    },
    {
      title: 'Bathroom tiling',
      description: 'Need a professional for bathroom wall tiling.',
      category: 'Plumbing',
      budgetMin: 150,
      budgetMax: 300,
      deadline: '2025-05-28',
      location: 'Ramallah',
      image: 'assets/plumbing-service.jpg'
    }
  ];
minBudget: any;

  get filteredJobs() {
    return this.jobs.filter(job => {
      const matchCategory = this.selectedCategory ? job.category === this.selectedCategory : true;
      const matchLocation = this.selectedLocation ? job.location === this.selectedLocation : true;
      const matchBudget = this.budgetMin !== null ? job.budgetMin >= this.budgetMin : true;
      return matchCategory && matchLocation && matchBudget;
    });
  }

  resetFilters() {
    this.selectedCategory = '';
    this.selectedLocation = '';
    this.budgetMin = null;
  }

  openApplyModal(job: any) {
    this.selectedJob = job;
    this.showApplyModal = true;
  }

  closeApplyModal() {
    this.showApplyModal = false;
  }

  submitApplication(data: { name: string; phone: string; message: string }) {
    alert(`Application submitted for "${this.selectedJob.title}":\nName: ${data.name}\nPhone: ${data.phone}\nMessage: ${data.message}`);
    this.closeApplyModal();
  }
}
