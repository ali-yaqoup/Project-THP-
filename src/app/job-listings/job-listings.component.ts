import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-listings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.css']
})
export class JobListingsComponent {
  categories = ['Electrician', 'Plumber', 'Carpenter', 'Blacksmith', 'HVAC'];
  locations = ['Ramallah', 'Jerusalem', 'Hebron', 'Nablus', 'Bethlehem'];

  selectedCategory: string = '';
  selectedLocation: string = '';
  budgetMin: number | null = null;

  messageContent: string = '';
  selectedJob: any = null;
  chatSidebarOpen: boolean = false;

  jobs = [
    {
      id: 1,
      title: 'Electrician Needed',
      description: 'Looking for an experienced electrician to rewire a home.',
      deadline: '2025-05-15',
      budgetMin: 300,
      budgetMax: 700,
      category: 'Electrician',
      location: 'Ramallah',
      image: 'https://via.placeholder.com/400x200?text=Electrician'
    },
    {
      id: 2,
      title: 'Plumber Required',
      description: 'Need a plumber to fix kitchen sink and bathroom pipes.',
      deadline: '2025-05-18',
      budgetMin: 200,
      budgetMax: 500,
      category: 'Plumber',
      location: 'Jerusalem',
      image: 'https://via.placeholder.com/400x200?text=Plumber'
    },
    {
      id: 3,
      title: 'Carpenter Job Available',
      description: 'Build custom wooden shelves and a wardrobe.',
      deadline: '2025-05-20',
      budgetMin: 400,
      budgetMax: 1000,
      category: 'Carpenter',
      location: 'Hebron',
      image: 'https://via.placeholder.com/400x200?text=Carpenter'
    },
    {
      id: 4,
      title: 'Blacksmith Needed',
      description: 'Forge and install a custom gate.',
      deadline: '2025-05-25',
      budgetMin: 600,
      budgetMax: 1200,
      category: 'Blacksmith',
      location: 'Bethlehem',
      image: 'https://via.placeholder.com/400x200?text=Blacksmith'
    },
    {
      id: 5,
      title: 'HVAC Technician',
      description: 'Install and maintain AC units.',
      deadline: '2025-05-28',
      budgetMin: 500,
      budgetMax: 1000,
      category: 'HVAC',
      location: 'Nablus',
      image: 'https://via.placeholder.com/400x200?text=HVAC'
    }
  ];

  get filteredJobs() {
    return this.jobs.filter(job => {
      const matchCategory = this.selectedCategory ? job.category === this.selectedCategory : true;
      const matchLocation = this.selectedLocation ? job.location === this.selectedLocation : true;
      const matchBudget = this.budgetMin != null ? job.budgetMin >= this.budgetMin : true;
      return matchCategory && matchLocation && matchBudget;
    });
  }

  applyFilters() {
    // No logic needed since filteredJobs is a getter
  }

  openChatSidebar(job: any) {
    this.selectedJob = job;
    this.messageContent = '';
    this.chatSidebarOpen = true;
  }

  closeChatSidebar() {
    this.chatSidebarOpen = false;
    this.selectedJob = null;
    this.messageContent = '';
  }

  sendMessage() {
    if (this.selectedJob && this.messageContent.trim()) {
      console.log(`Message to ${this.selectedJob.title}:`, this.messageContent);
      alert(`Message sent to "${this.selectedJob.title}":\n${this.messageContent}`);
      this.closeChatSidebar();
    }
  }
}
