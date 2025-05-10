import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-hero',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './services-hero.component.html',
  styleUrls: ['./services-hero.component.css']
})
export class ServicesHeroComponent {}