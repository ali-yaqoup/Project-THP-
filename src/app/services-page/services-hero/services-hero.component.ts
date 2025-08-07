import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-services-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services-hero.component.html',
  styleUrls: ['./services-hero.component.css']
})
export class ServicesHeroComponent implements OnInit {
  isLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isUserAuthenticated();

    this.authService.isLoggedIn().subscribe(status => {
      this.isLoggedIn = status;
    });
  }
}
