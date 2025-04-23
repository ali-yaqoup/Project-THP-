import { Component } from '@angular/core';
import { AboutCtaComponent } from '../ABUT-US/about-cta/about-cta.component';
import { AboutHeroComponent } from '../ABUT-US/about-hero/about-hero.component';
import { AboutMissionComponent } from '../ABUT-US/about-mission/about-mission.component';
import { AboutTeamComponent } from '../ABUT-US/about-team/about-team.component';
import { AboutWhyComponent } from '../ABUT-US/about-why/about-why.component';

@Component({
  selector: 'app-about-us-page',
  imports: [AboutCtaComponent,AboutHeroComponent,AboutMissionComponent ,AboutTeamComponent,AboutWhyComponent],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.css'
})
export class AboutUsPageComponent {

}
