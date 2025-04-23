import { Component } from '@angular/core';
import { ContactMapComponent } from '../Contact/contact-map/contact-map.component';
import { ContactInfoComponent } from '../Contact/contact-info/contact-info.component';
import { ContactHeaderComponent } from '../Contact/contact-header/contact-header.component';
import { ContactFormComponent } from '../Contact/contact-form/contact-form.component';

@Component({
  selector: 'app-contact-page',
  imports: [ContactMapComponent,ContactInfoComponent,ContactHeaderComponent,ContactFormComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

}
