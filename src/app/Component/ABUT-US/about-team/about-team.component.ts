import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.css']
})
export class AboutTeamComponent {
  team = [
    {
      name: 'kareem',
      title: 'Founder & CEO',
      img: 'https://i.pravatar.cc/150?img=47'
    },
    {
      name: 'kareem',
      title: 'CTO & Lead Developer',
      img: 'https://i.pravatar.cc/150?img=32'
    },
    {
      name: 'kareem',
      title: 'Marketing Manager',
      img: 'https://i.pravatar.cc/150?img=52'
    },
  
  ];
}