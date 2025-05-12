import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-filters.component.html',
  styleUrls: ['./job-filters.component.css']
})
export class JobFiltersComponent {
  @Input() categories: string[] = [];
  @Input() locations: string[] = [];

  @Input() selectedCategory: string = '';
  @Input() selectedLocation: string = '';
  @Input() budgetMin: number | null = null;

  @Output() selectedCategoryChange = new EventEmitter<string>();
  @Output() selectedLocationChange = new EventEmitter<string>();
  @Output() budgetMinChange = new EventEmitter<number | null>();
  @Output() filterChanged = new EventEmitter<void>();

  resetFilters() {
    this.selectedCategory = '';
    this.selectedLocation = '';
    this.budgetMin = null;

    this.selectedCategoryChange.emit('');
    this.selectedLocationChange.emit('');
    this.budgetMinChange.emit(null);

    this.filterChanged.emit();
  }
}
