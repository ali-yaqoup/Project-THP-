import { Component } from '@angular/core';
import { ContactMapComponent } from './contact-map/contact-map.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactHeaderComponent } from './contact-header/contact-header.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  imports: [ContactMapComponent,ContactInfoComponent,ContactHeaderComponent,ContactFormComponent,HeaderComponent,FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
