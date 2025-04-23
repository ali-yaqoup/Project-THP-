import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  allTestimonials = [
    { message: 'Great platform! I found the perfect plumber for my house.', name: 'Ahmad Saleh', role: 'Job Owner' },
    { message: 'The bidding system is very fair and transparent.', name: 'Nour Zidan', role: 'Technician' },
    { message: 'Easy to use and very effective. I got the job done quickly.', name: 'Rami Khalil', role: 'Job Owner' },
    { message: 'Love the design and how organized everything is.', name: 'Leila Hasan', role: 'Technician' },
    { message: 'Highly recommended for both clients and professionals.', name: 'Hani Othman', role: 'Job Owner' },
    { message: 'I got 3 jobs in one week using this platform.', name: 'Khaled F.', role: 'Technician' }
  ];

  testimonials = this.allTestimonials.slice(0, 4);
}