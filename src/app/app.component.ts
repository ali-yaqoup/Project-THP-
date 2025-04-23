import { Component } from '@angular/core';

import { EmailVerificationComponent } from './Component/email-verification/email-verification.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { LoginPageComponent } from './Component/login-page/login-page.component';
import { RegisterComponent } from './Component/register/register.component';
import { HeaderComponent } from './Component/HOME/header/header.component';
import { ErrorComponent } from './Component/error/error.component';
import { HeroSectionComponent } from './Component/HOME/hero-section/hero-section.component';
import { HowItWorksComponent } from './Component/HOME/how-it-works/how-it-works.component';
import { TopCategoriesComponent } from './Component/HOME/top-categories/top-categories.component';
import { FooterComponent } from './Component/HOME/footer/footer.component';
import { TestimonialsComponent } from './Component/HOME/testimonials/testimonials.component';
import { AboutHeroComponent } from './Component/ABUT-US/about-hero/about-hero.component';
import { AboutMissionComponent } from './Component/ABUT-US/about-mission/about-mission.component';
import { AboutWhyComponent } from './Component/ABUT-US/about-why/about-why.component';
import { AboutCtaComponent } from './Component/ABUT-US/about-cta/about-cta.component';
import { AboutTeamComponent } from './Component/ABUT-US/about-team/about-team.component';
import { ServicesHeroComponent } from './Component/Servicse/services-hero/services-hero.component';
import { ContactHeaderComponent } from './Component/Contact/contact-header/contact-header.component';
import { ContactFormComponent } from './Component/Contact/contact-form/contact-form.component';
import { ContactInfoComponent } from './Component/Contact/contact-info/contact-info.component';
import { ContactMapComponent } from './Component/Contact/contact-map/contact-map.component';


import { RouterModule } from '@angular/router';




@Component({
  selector: 'app-root',
  imports: [LoginPageComponent,EmailVerificationComponent,ForgotPasswordComponent,ResetPasswordComponent,RegisterComponent,HeaderComponent,ErrorComponent,HeroSectionComponent,HowItWorksComponent,TopCategoriesComponent,FooterComponent,TestimonialsComponent,AboutHeroComponent,AboutMissionComponent,AboutWhyComponent,AboutCtaComponent,AboutTeamComponent,ServicesHeroComponent,ContactHeaderComponent,ContactFormComponent,ContactInfoComponent,ContactMapComponent,RouterModule
    
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'THP';
}
