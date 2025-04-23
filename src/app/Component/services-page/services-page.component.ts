import { Component } from '@angular/core';
import { ServicesHeroComponent } from '../Servicse/services-hero/services-hero.component';
import { TopCategoriesComponent } from '../HOME/top-categories/top-categories.component';
import { HowItWorksComponent } from '../HOME/how-it-works/how-it-works.component';
import { AboutCtaComponent } from '../ABUT-US/about-cta/about-cta.component';

@Component({
  selector: 'app-services-page',
  imports: [ServicesHeroComponent,TopCategoriesComponent,HowItWorksComponent,AboutCtaComponent],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.css'
})
export class ServicesPageComponent {

}
