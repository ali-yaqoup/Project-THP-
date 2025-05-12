import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apply-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './apply-modal.component.html',
  styleUrls: ['./apply-modal.component.css']
})
export class ApplyModalComponent {
  @Input() open = false;
  @Input() job: any;

  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<{ name: string, phone: string, message: string }>();

  name = '';
  phone = '';
  message = '';

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    if (this.name.trim() && this.phone.trim()) {
      this.submit.emit({
        name: this.name,
        phone: this.phone,
        message: this.message
      });
      this.resetForm();
    } else {
      alert("Please fill in required fields.");
    }
  }

  resetForm() {
    this.name = '';
    this.phone = '';
    this.message = '';
  }
}
