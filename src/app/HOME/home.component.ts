import { Component } from '@angular/core';
import { BidSubmissionComponent } from '../Job-Search-Bidding/bid-submission/bid-submission.component';
import { TopCategoriesComponent } from './top-categories/top-categories.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { HeaderComponent } from '../header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-home',
  imports: [TopCategoriesComponent, TestimonialsComponent, HowItWorksComponent, HeroSectionComponent, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HOMEComponent {

}
