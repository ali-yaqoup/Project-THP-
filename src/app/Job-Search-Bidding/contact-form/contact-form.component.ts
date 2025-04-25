import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  jobTitle = '';
  message = '';
  email = '';

  constructor(private route: ActivatedRoute) {
    this.jobTitle = this.route.snapshot.queryParamMap.get('jobTitle') || '';
  }

  sendMessage() {
    alert(`Message sent about: ${this.jobTitle}\nFrom: ${this.email}\nMessage: ${this.message}`);
  }
}
