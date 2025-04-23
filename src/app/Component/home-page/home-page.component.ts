import { Component } from '@angular/core';
import { HeroSectionComponent } from '../HOME/hero-section/hero-section.component';
import { HowItWorksComponent } from '../HOME/how-it-works/how-it-works.component';
import { TestimonialsComponent } from '../HOME/testimonials/testimonials.component';
import { TopCategoriesComponent } from '../HOME/top-categories/top-categories.component';

@Component({
  selector: 'app-home-page',
  imports: [HeroSectionComponent,HowItWorksComponent,TestimonialsComponent,TopCategoriesComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
