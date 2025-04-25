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
      name: 'Ali',
      title: 'Founder & CEO',
      img: 'https://scontent.fjrs29-1.fna.fbcdn.net/v/t39.30808-1/459957838_1212591473415456_6012384593347153789_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=Zon5R6Pmr9AQ7kNvwF1t4tR&_nc_oc=Adkt2cfOhyZWU4AA1yeNuKf2zNchwYkfqAqMRP8au8MZTChmkEh0z7dfdX_48BbXObo&_nc_zt=24&_nc_ht=scontent.fjrs29-1.fna&_nc_gid=O8IemJ8pKK8p6mBAvWvPlQ&oh=00_AfF9IdJE4pi7Ql2cYic6sr0unim6q5Yjt6gu0pGR7bLxmg&oe=68114A3D'
    },
    {
      name: 'kareem',
      title: 'CTO & Lead Developer',
      img: 'https://scontent.fjrs29-1.fna.fbcdn.net/v/t39.30808-6/343000829_783387196307065_3501521866739636906_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3QHUpf4RaLkQ7kNvwEp4JLz&_nc_oc=AdkAoDxA55aUHglu79JeIOL20T1mAGY4scO0ammVYuGJn7hbJcNZJ-0_11_MiVJTQVo&_nc_zt=23&_nc_ht=scontent.fjrs29-1.fna&_nc_gid=bM663VhjAb7ODD6DoBFXWw&oh=00_AfEqPGr7SzX7XpWNYcxYybJ_FR9D3J0cWnRVM7qPqKY_Pw&oe=681166E1'
    },
    {
      name: 'Waleed',
      title: 'Marketing Manager',
      img: 'https://scontent.fjrs29-1.fna.fbcdn.net/v/t39.30808-1/487201446_1714525336125619_6326845046608345815_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=sp852fKM8WoQ7kNvwGEKHe1&_nc_oc=Adm02iGqi5408fFhUHCtLpQme4aCXMm1wt83Dv9GbzzHJDWD-0eXwU35f132TDZg3QM&_nc_zt=24&_nc_ht=scontent.fjrs29-1.fna&_nc_gid=dSBgCD-_OWQs1qKeL3GOTw&oh=00_AfGPIlzPk0nuimnKwDjDS46JHaU3DJlecy901GpN_ykWqg&oe=68114F07'
    },
  
  ];
}