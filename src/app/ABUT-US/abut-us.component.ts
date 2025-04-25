import { Component } from '@angular/core';
import { AboutCtaComponent } from './about-cta/about-cta.component';
import { AboutHeroComponent } from './about-hero/about-hero.component';
import { AboutMissionComponent } from './about-mission/about-mission.component';
import { AboutTeamComponent } from './about-team/about-team.component';
import { AboutWhyComponent } from './about-why/about-why.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-abut-us',
  imports: [AboutCtaComponent,AboutHeroComponent,AboutMissionComponent ,AboutTeamComponent,AboutWhyComponent,HeaderComponent],
  templateUrl: './abut-us.component.html',
  styleUrl: './abut-us.component.css'
})
export class ABUTUSComponent {

}
