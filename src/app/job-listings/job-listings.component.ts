import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-job-listings',
  imports: [CommonModule,FormsModule ],
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.css']
})
export class JobListingsComponent {
  jobCards = [
    {
      id: 1,
      title: 'Web Developer Needed',
      text: 'Looking for a frontend developer with Angular experience.',
      imageUrl: 'assets/images/web-dev.jpg',
      category: 'Development',
      deadline: '2025-05-15',
      minBudget: 500,
      maxBudget: 1200
    },
    {
      id: 2,
      title: 'Graphic Designer',
      text: 'Need a designer to create a brand identity.',
      imageUrl: 'assets/images/design.jpg',
      category: 'Design',
      deadline: '2025-05-20',
      minBudget: 300,
      maxBudget: 700
    },
    {
      id: 3,
      title: 'Mobile App Developer',
      text: 'Create a cross-platform app using Flutter.',
      imageUrl: 'assets/images/mobile.jpg',
      category: 'Development',
      deadline: '2025-05-25',
      minBudget: 1000,
      maxBudget: 2000
    },
  
    {
      id: 4,
      title: 'SEO Specialist',
      text: 'Improve website ranking on Google.',
      imageUrl: 'assets/images/seo.jpg',
      category: 'Marketing',
      deadline: '2025-05-18',
      minBudget: 400,
      maxBudget: 800
    },
    {
      id: 5,
      title: 'Content Writer',
      text: 'Write articles and product descriptions.',
      imageUrl: 'assets/images/writer.jpg',
      category: 'Writing',
      deadline: '2025-05-19',
      minBudget: 200,
      maxBudget: 500
    },
    {
      id: 6,
      title: 'Video Editor',
      text: 'Edit short promotional videos.',
      imageUrl: 'assets/images/video.jpg',
      category: 'Design',
      deadline: '2025-05-21',
      minBudget: 300,
      maxBudget: 900
    },
    {
      id: 7,
      title: 'Data Analyst',
      text: 'Analyze sales and customer data.',
      imageUrl: 'assets/images/data.jpg',
      category: 'Analytics',
      deadline: '2025-05-22',
      minBudget: 600,
      maxBudget: 1000
    }
  ];

  searchTerm: string = '';
  selectedCategory: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 6;
  uniqueCategories: string[] = [];

  ngOnInit(): void {
    this.extractUniqueCategories();
  }

  extractUniqueCategories(): void {
    this.uniqueCategories = [...new Set(this.jobCards.map(job => job.category))];
  }

  filteredJobs(): any[] {
    return this.jobCards.filter(job =>
      job.title.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.selectedCategory === '' || job.category === this.selectedCategory)
    );
  }

  get totalPages(): number {
    return Math.ceil(this.filteredJobs().length / this.itemsPerPage);
  }

  get paginatedJobs(): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredJobs().slice(start, start + this.itemsPerPage);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
