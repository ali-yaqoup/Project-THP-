import { Component } from '@angular/core';
import { AboutCtaComponent } from '../ABUT-US/about-cta/about-cta.component';
import { TopCategoriesComponent } from '../HOME/top-categories/top-categories.component';
import { HowItWorksComponent } from '../HOME/how-it-works/how-it-works.component';
import { ServicesHeroComponent } from './services-hero/services-hero.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-services',
  imports: [ServicesHeroComponent,TopCategoriesComponent,HowItWorksComponent,AboutCtaComponent,HeaderComponent,FooterComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
