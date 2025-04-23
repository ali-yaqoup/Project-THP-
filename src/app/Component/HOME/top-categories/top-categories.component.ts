import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-categories.component.html',
  styleUrls: ['./top-categories.component.css']
})
export class TopCategoriesComponent {
  categories = [
    { name: 'Plumbing', icon: 'fas fa-wrench' },
    { name: 'Electrician', icon: 'fas fa-bolt' },
    { name: 'Carpentry', icon: 'fas fa-hammer' },
    { name: 'Painting', icon: 'fas fa-paint-roller' },
    { name: 'AC Repair', icon: 'fas fa-fan' },
    { name: 'Cleaning', icon: 'fas fa-broom' }
  ];
}