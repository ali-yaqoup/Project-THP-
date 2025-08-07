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
      img: 'https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-1/459957838_1212591473415456_6012384593347153789_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=dK_mqWS3_SUQ7kNvwEA9Fuh&_nc_oc=Adlt5H0fVWg3cGDwTRwgecTvK9EAVbBYWl7PN4XafKCU1a2k_pMbSfPEJjXZD-cn7gY&_nc_zt=24&_nc_ht=scontent.fjrs27-1.fna&_nc_gid=72S8qpMMka9x1NGtW61KEQ&oh=00_AfNL5O0HkF6a9AqdiEyIziHuj4Qj8Yj0Dj6bYGgayXJ5QQ&oe=6859CCBD'
    },
    {
      name: 'kareem',
      title: 'CTO & Lead Developer',
      img: 'https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-1/343000829_783387196307065_3501521866739636906_n.jpg?stp=dst-jpg_s200x200_tt6&amp;_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=e99d92&amp;_nc_ohc=FuIPRv5kRCkQ7kNvwFdf5NC&amp;_nc_oc=AdktkLTDqtksQ9b6j65b2JeemPx75hEOdWgnAtM05P3scki_7LH1IL6NRQ4PRH-o6nU&amp;_nc_zt=24&amp;_nc_ht=scontent.fjrs27-1.fna&amp;_nc_gid=2qsVN80Z9vYDxC-qljXkbQ&amp;oh=00_AfNASBnBhf4h5qoTvJr4ocWGjaVPs9ohKcdyGEd55pFS4w&amp;oe=6859C367xlink:href="https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-1/343000829_783387196307065_3501521866739636906_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=FuIPRv5kRCkQ7kNvwFdf5NC&_nc_oc=AdktkLTDqtksQ9b6j65b2JeemPx75hEOdWgnAtM05P3scki_7LH1IL6NRQ4PRH-o6nU&_nc_zt=24&_nc_ht=scontent.fjrs27-1.fna&_nc_gid=2qsVN80Z9vYDxC-qljXkbQ&oh=00_AfNASBnBhf4h5qoTvJr4ocWGjaVPs9ohKcdyGEd55pFS4w&oe=6859C367'
    },
    {
      name: 'Waleed',
      title: 'Marketing Manager',
      img: 'https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-1/487201446_1714525336125619_6326845046608345815_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=n0v0ORngUXQQ7kNvwEbv--m&_nc_oc=AdmgTLnUv9of7d1ihqQBMo6qdqqr4BaORppMt3eW_SZ7PDunGj9nil4XDEEYDb9r-E8&_nc_zt=24&_nc_ht=scontent.fjrs27-1.fna&_nc_gid=Cts6xf0d16Bhwt1LnMhjHw&oh=00_AfP55lBVXdqsAGTnTI_jKrC25Z87Dm4byQYd5PJ7LWnIkw&oe=68599947'
    },

  ];
}
