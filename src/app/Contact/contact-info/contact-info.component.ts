import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent {
  contactDetails = [
    { icon: 'fas fa-map-marker-alt', title: 'Address', info: '123 Main Street, Ramallah, Palestine' },
    { icon: 'fas fa-phone', title: 'Phone', info: '+970 599 123 456' },
    { icon: 'fas fa-envelope', title: 'Email', info: 'support@example.com' },
    { icon: 'fas fa-clock', title: 'Working Hours', info: 'Sun - Thu, 9AM - 5PM' }
  ];
}